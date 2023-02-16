import AuthControllers from '../controllers/authController.js'

export default function authRoutes(app) {
  app.post('/v1/auth/register', AuthControllers.register)
  app.post('/v1/auth/login', AuthControllers.login)
}
