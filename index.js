import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import AdminRoutes from './src/routers/index.js'

import bodyParser from 'body-parser'

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

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
