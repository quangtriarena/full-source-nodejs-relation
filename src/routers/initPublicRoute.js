import variantRoute from './v1/variant'
import productRoute from './v1/product'

function initPublicRoute(app) {
  app.use('/api/v2/variants', variantRoute)
  app.use('/api/v2/products', productRoute)

  return app.use('/', (req, res) => {
    return res.send('server on')
  })
}

export default initPublicRoute
