import CategoryControllers from '../controllers/categoryController.js'

export default function ProductRoutes(app) {
  app.get('/api/categories/count', CategoryControllers.count)
  app.get('/api/categories', CategoryControllers.find)
  app.get('/api/categories/:id', CategoryControllers.findById)
  app.post('/api/categories', CategoryControllers.create)
  app.put('/api/categories/:id', CategoryControllers.update)
  app.delete('/api/categories/:id', CategoryControllers.delete)
}
