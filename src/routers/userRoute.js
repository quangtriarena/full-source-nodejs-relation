import UserControllers from '../controllers/userController.js'
import AuthMiddleware from '../middlewares/authMiddleware.js'

export default function UserRoutes(app) {
  app.get('/api/users/count', AuthMiddleware.verifyToken, UserControllers.count)
  app.get('/api/users', AuthMiddleware.verifyToken, UserControllers.find)
  app.get('/api/users/:id', AuthMiddleware.verifyToken, UserControllers.findById)
  app.post('/api/users', AuthMiddleware.verifyToken, UserControllers.create)
  app.put('/api/users/:id', AuthMiddleware.verifyToken, UserControllers.update)
  app.delete('/api/users/:id', AuthMiddleware.verifyTokenAdmin, UserControllers.delete)
}
