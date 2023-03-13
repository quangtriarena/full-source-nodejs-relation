import AuthControllers from '../controllers/authController.js'
import AuthMiddleware from '../middlewares/authMiddleware.js'
import Validation from '../helpers/validate.js'

export default function authRoutes(app) {
  app.post('/v1/auth/register', Validation.create, AuthControllers.register)
  app.post('/v1/auth/login', AuthControllers.login)
  app.post('/v1/auth/refresh', AuthControllers.requestRefreshToken)
  app.post('/v1/auth/logout', AuthMiddleware.verifyToken, AuthControllers.logout)
}
