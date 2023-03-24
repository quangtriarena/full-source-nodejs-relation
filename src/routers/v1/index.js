import express from 'express'
import variantRoute from './variant'
import imageRoute from './image'
import testRoute from './test'
import wishlistRoute from './wishlist'
const routes = express.Router()

routes.use('/v1', variantRoute, imageRoute, testRoute, wishlistRoute)

export default routes
