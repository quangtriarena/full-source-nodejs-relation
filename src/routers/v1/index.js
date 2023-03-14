import express from 'express'
import variantRoute from './variant'
import imageRoute from './image'
import testRoute from './test'
const routes = express.Router()

routes.use('/v1', variantRoute, imageRoute, testRoute)

export default routes
