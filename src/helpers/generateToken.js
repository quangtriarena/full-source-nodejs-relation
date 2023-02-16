import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

export default {
  accessToken: (user) => {
    const payload = {
      id: user.id,
      admin: user.admin,
    }

    const options = {
      expiresIn: '1d',
    }

    return jwt.sign(payload, process.env.JWT_SECRET, options)
  },

  refreshToken: (user) => {
    const payload = {
      id: user.id,
      admin: user.admin,
    }
    const options = {
      expiresIn: '365d',
    }
    return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, options)
  },
}
