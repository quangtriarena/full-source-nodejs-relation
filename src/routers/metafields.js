import ResponseHandler from '../helpers/responseHandler.js'
import metafieldMiddleware from '../middlewares/metafieldMiddleware.js'

export default function MetafieldRoute(app) {
  app.get('/api/metafields', async (req, res) => {
    try {
      const _data = await metafieldMiddleware.find()

      return ResponseHandler.success(res, _data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  })
}
