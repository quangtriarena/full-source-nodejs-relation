import ProductControllers from '../controllers/productController.js'

export default function ProductRoutes(app) {
  app.get('/api/products/count', ProductControllers.count)
  app.get('/api/products', ProductControllers.find)
  app.get('/api/products/:id', ProductControllers.findById)
  app.post('/api/products', ProductControllers.create)
  app.put('/api/products/:id', ProductControllers.update)
  app.delete('/api/products/:id', ProductControllers.delete)
}
