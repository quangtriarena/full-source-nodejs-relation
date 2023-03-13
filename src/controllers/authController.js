import ResponseHandle from '../helpers/responseHandler.js'
import Model from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import generateToken from '../helpers/generateToken.js'

let REFRESH_TOKEN = []

const AuthControllers = {
  register: async (req, res) => {
    try {
      const { user_name, email, password } = req.body

      if (!user_name && !email && !password) {
        throw new Error('All fields are required')
      }

      const salt = await bcrypt.genSalt(10)
      const hashed = await bcrypt.hash(password, salt)

      const newUser = {
        user_name,
        email,
        password: hashed,
      }

      const [user, created] = await Model.findOrCreate({
        where: { email: email },
        defaults: newUser,
      })

      if (!created) {
        throw new Error('User already exists')
      }

      return ResponseHandle.success(res, user)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  login: async (req, res) => {
    try {
      let user = await Model.findOne({ where: { user_name: req.body.user_name }, raw: true })

      if (!user) {
        throw new Error('Wrong username / email')
      }

      /**
       * kiểm tra mật khẩu gửi lên có khớp với mật khẩu trong db hay không
       */
      const validPassword = await bcrypt.compare(req.body.password, user.password)

      if (!validPassword) {
        throw new Error('Wrong password')
      }

      /**
       * user_name và password hợp lệ
       */
      if (user && validPassword) {
        /**
         * tạo cả 2:
         * access_token và refresh_token
         */
        const access_token = generateToken.accessToken(user)
        const refresh_token = generateToken.refreshToken(user)

        /**
         * khi login sẽ lưu trữ lại refresh token vào db
         * do không có db nên lưu tạm vào array
         */
        REFRESH_TOKEN.push(refresh_token)

        /**
         * lưu refresh token vào cookie
         */
        res.cookie('refresh_token', refresh_token, {
          httpOnly: true,
          secure: false,
          path: '/',
          sameSite: 'strict',
        })

        /**
         * user trả về sẽ thêm key access_token vào data
         */
        user = {
          ...user,
          access_token,
        }

        /**
         * xoá những key quan trọng như password ...
         */
        delete user.password
      }

      return ResponseHandle.success(res, user)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  logout: async (req, res) => {
    /**
     * xoá refresh token khỏi cookie
     */
    res.clearCookie('refresh_token')

    REFRESH_TOKEN.filter((token) => token !== req.cookies.refresh_token)

    res.status(200).json({ message: 'Logout success' })
  },

  requestRefreshToken: async (req, res) => {
    try {
      // lấy refresh token từ cookie
      const refreshToken = req.cookies.refresh_token

      if (!refreshToken) {
        res.status(401).json('No refresh token found')
      }

      /**
       * trường hợp có refresh token nhưng token này không phải của mình
       */
      if (!REFRESH_TOKEN.includes(refreshToken)) {
        res.status(401).json('Refresh token is invalid')
      }

      /**
       * verify refresh token để tạo access token mới
       */
      jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
        if (err) {
          return ResponseHandle.error(res, err)
        }
        /**
         * lọc lại nhưng token mới
         */
        REFRESH_TOKEN = REFRESH_TOKEN.filter((token) => token !== refreshToken)

        // create new access token
        const newAccessToken = generateToken.accessToken(user)
        const newRefreshToken = generateToken.refreshToken(user)

        /**
         * lưu lại token mới vào db
         */
        REFRESH_TOKEN.push(newRefreshToken)

        /**
         * lưu refresh token mới vào cookie
         */
        res.cookie('refresh_token', newRefreshToken, {
          httpOnly: true,
          secure: false,
          path: '/',
          sameSite: 'strict',
        })

        /**
         * trả về access_token mới
         */
        res.status(200).json({ accessToken: newAccessToken })
      })
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },
}

export default AuthControllers
