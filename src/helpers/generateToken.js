import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

export default {
  accessToken: (user) => {
    /**
     * data được lưu vào trong access token
     */
    const payload = {
      id: user.id,
      admin: user.admin,
    }

    /**
     * cài đặt thời gian hết hạn cho access token
     */
    const options = {
      expiresIn: '20s',
    }

    /**
     * register access_tokens
     */
    return jwt.sign(payload, process.env.JWT_SECRET, options)
  },

  refreshToken: (user) => {
    /**
     * data được lưu vào trong refresh token
     */
    const payload = {
      id: user.id,
      admin: user.admin,
    }

    /**
     * cài đặt thời gian hết hạn cho refresh token
     */
    const options = {
      expiresIn: '365d',
    }

    /**
     * register refresh_tokens
     */
    return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, options)
  },
}
