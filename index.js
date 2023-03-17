import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import AdminRoutes from './src/routers'
import initPublicRoute from './src/routers/initPublicRoute'
import PrivateRoute from './src/routers/private'
import RouterV1 from './src/routers/v1'

dotenv.config()

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser())
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
)

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
/**
 * end config route kiểu mới
 */

/**
 * config route theo 1 cách khác nữa
 */

initPublicRoute(app)

export default app
