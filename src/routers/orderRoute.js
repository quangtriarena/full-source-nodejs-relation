import OrderControllers from '../controllers/orderController.js'

export default function OrderRoute(app) {
  app.get('/api/orders/count', OrderControllers.count)
  app.get('/api/orders', OrderControllers.find)
  app.get('/api/orders/:id', OrderControllers.findById)
  app.post('/api/orders', OrderControllers.create)
  app.put('/api/orders/:id', OrderControllers.update)
  app.delete('/api/orders/:id', OrderControllers.delete)
}
