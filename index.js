import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import AdminRoutes from './src/routers'
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
 * admin routes
 */
AdminRoutes(app)
/**
 * end admin routes
 */

app.listen(process.env.PORT, () => {
  console.log(`app run ${process.env.PORT} , http://localhost:${process.env.PORT}`)
})
