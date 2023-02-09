import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import AdminRoutes from './src/routers/index.js'
import jwtMiddleWare from './src/middlewares/jwtMiddleware.js'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

jwtMiddleWare.createToken()
jwtMiddleWare.verifyToken(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imx1dXF1YW5ndHJpOTUiLCJpYXQiOjE2NzU5NTA2MDB9.8-JRvjWJHtx3D9nYjrWsq-G3XQY2FrmJWM08_9xP4cQ'
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
