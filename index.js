import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import AdminRoutes from './src/routers'
import initPublicRoute from './src/routers/initPublicRoute'
import PrivateRoute from './src/routers/private'
import RouterV1 from './src/routers/v1'
import verifyHmac from './src/utils/verifyHmac'
import axios from 'axios'
import fs from 'fs'
import serveStatic from 'serve-static'
import path from 'path'
import './src/models/store_settingsModel'
import './src/models/productShopifyModel'
import './src/models/wishlistModel.js'
import './src/models/wishlistProductLinksModel'

var nonceCreate = require('nonce')()

dotenv.config()

const { SHOPIFY_APP_HOST, SHOPIFY_APP_SCOPES, STORE, SHOPIFY_APP_KEY, SHOPIFY_APP_SECRET } =
  process.env

const STATIC_PATH = (process.env.STATIC_PATH =
  process.env.NODE_ENV === 'production'
    ? path.resolve(process.cwd(), '../frontend/build')
    : path.resolve(process.cwd(), '../frontend'))

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.json())
app.use(serveStatic(STATIC_PATH, { index: false }))
app.use(cookieParser())
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
)

console.log('path', path.join(__dirname, '/src/views'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/src/views'))

/**
 * test many middlewares
 */

// const middleware1 = (req, res, next) => {
//   console.log('abc')
//   next()
// }
// const middleware2 = (req, res, next) => {
//   console.log('bc')
//   next()
// }
// const middleware3 = (req, res, next) => {
//   console.log('f')
//   next()
// }

// app.get('/example', middleware1, middleware2, middleware3, (req, res) => {
//   return res.send('hello world')
// })

// app.get('/example', [middleware2, middleware1, middleware3], (req, res) => {
//   return res.send('hello world')
// })

/**
 * admin routes
 */
AdminRoutes(app)
/**
 * end admin routes
 */

/**
 * admin routes
 */
PrivateRoute(app)
/**
 * end admin routes
 */

/**
 * config route kiểu mới
 */
app.use('/api', RouterV1)

app.get('/auth', (req, res) => {
  try {
    let { shop } = req.query

    console.log('init')
    let nonce = nonceCreate()
    let callBackLink = `${SHOPIFY_APP_HOST}/auth/callback`

    if (shop) {
      let authUrl = `https://${shop}/admin/oauth/authorize?client_id=${SHOPIFY_APP_KEY}&scope=read_products,write_products&redirect_uri=${callBackLink}&state=${nonce}`
      res.redirect(authUrl)

      return
    } else {
      res
        .status(400)
        .send('Missing shop parameter. Please add ?shop=your-shop.myshopify.com to your request')
    }
  } catch (error) {
    console.log(error)
  }
})

app.get('/auth/callback', async (req, res) => {
  try {
    const { shop, code, state, host, hmac } = req.query

    // VERIFY HMAC
    if (!verifyHmac(req.query)) {
      res.send('Unauthenticated Request HMAC!')
      return
    }

    // CHECK NONCE

    // GET ACCESS_TOKEN
    const url = `https://${shop}/admin/oauth/access_token`
    const response = await axios({
      method: 'post',
      url,
      data: {
        client_id: SHOPIFY_APP_KEY,
        client_secret: SHOPIFY_APP_SECRET,
        code,
      },
    })

    const access_token = response.data.access_token

    console.log('🚀🚀🚀 ~ file: index.js:128 ~ app.get ~ access_token:', access_token)

    // SAVE ACCESS_TOKEN TO DATABASE

    res.redirect(`/?shop=${shop}&host=${host}`)
  } catch (error) {
    console.log(error)
  }
})

app.get('/', (req, res) => {
  const { shop, host } = req.query

  res
    .status(200)
    .set('Content-Type', 'text/html')
    .send(fs.readFileSync(path.join(STATIC_PATH, '/public/index.html')))

  // res.render('index')
})

/**
 * end config route kiểu mới
 */

/**
 * config route theo 1 cách khác nữa
 */

initPublicRoute(app)

export default app
