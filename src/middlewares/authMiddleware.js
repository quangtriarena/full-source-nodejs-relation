import jwt from 'jsonwebtoken'

const AuthMiddleware = {
  /* A middleware function that checks if the user has a valid token. */
  verifyToken: (req, res, next) => {
    console.log('next', next)
    const token = req.headers['authorization']

    if (!token) {
      return res.status(403).send({
        message: 'No token provided.',
      })
    }

    const access_token = token.split(' ')[1]

    jwt.verify(access_token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).send({
          message: 'Invalid token.',
        })
      }

      // Lưu thông tin người dùng vào request
      req.user = user
      next()
    })
  },

  verifyTokenAdmin: (req, res, next) => {
    AuthMiddleware.verifyToken(req, res, () => {
      console.log('req.user.id', req.user.id)
      console.log('req.params.id', req.params.id)
      if (req.user.id.toString() === req.params.id.toString() || req.user.admin) {
        next()
      } else {
        return res.status(403).send({
          message: 'Access denied.',
        })
      }
    })
  },
}

export default AuthMiddleware
