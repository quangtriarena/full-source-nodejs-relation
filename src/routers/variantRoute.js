import VariantControllers from '../controllers/variantController.js'

export default function VariantRoutes(app) {
  app.get('/api/variants/count', VariantControllers.count)
  app.get('/api/variants', VariantControllers.find)
  app.get('/api/variants/:id', VariantControllers.findById)
  app.post('/api/variants', VariantControllers.create)
  app.put('/api/variants/:id', VariantControllers.update)
  app.delete('/api/variants/:id', VariantControllers.delete)
}
