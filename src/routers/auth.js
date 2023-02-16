import AuthControllers from '../controllers/authController.js'
import AuthMiddleware from '../middlewares/authMiddleware.js'

export default function authRoutes(app) {
  app.post('/v1/auth/register', AuthControllers.register)
  app.post('/v1/auth/login', AuthControllers.login)
  app.post('/v1/auth/refresh', AuthControllers.requestRefreshToken)
  app.post('/v1/auth/logout', AuthMiddleware.verifyToken, AuthControllers.logout)
}
