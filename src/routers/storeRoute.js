import StoreControllers from '../controllers/storeController.js'

export default function StoreRoutes(app) {
  app.get('/api/stores/count', StoreControllers.count)
  app.get('/api/stores', StoreControllers.find)
  app.get('/api/stores/:id', StoreControllers.findById)
  app.post('/api/stores', StoreControllers.create)
  app.put('/api/stores/:id', StoreControllers.update)
  app.delete('/api/stores/:id', StoreControllers.delete)
}
