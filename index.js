import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import AdminRoutes from './src/routers'
import PrivateRoute from './src/routers/private'

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

export default app
