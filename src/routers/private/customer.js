import ResponseHandle from '../../helpers/responseHandler'
import AuthMiddleware from '../../middlewares/authMiddleware'

function privateCustomer(app) {
  app.get('/private/customers/count', AuthMiddleware.verifyToken, async (req, res) => {
    try {
      return res.status(200).json({ message: 'get customer count success' })
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  })
}

export default privateCustomer
