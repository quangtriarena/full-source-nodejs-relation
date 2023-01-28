import HomeRoute from './homeRoute.js'
import ProductRoutes from './productRoute.js'
import CategoryRoutes from './categoryRoute.js'
import VariantRoutes from './variantRoute.js'
import OrderRoutes from './orderRoute.js'
import StoreRoutes from './storeRoute.js'

export default function AdminRoutes(app) {
  HomeRoute(app)
  ProductRoutes(app)
  CategoryRoutes(app)
  VariantRoutes(app)
  OrderRoutes(app)
  StoreRoutes(app)
}
