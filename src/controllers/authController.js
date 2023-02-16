import ResponseHandle from '../helpers/responseHandler.js'
import Model from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import generateToken from '../helpers/generateToken.js'

const AuthControllers = {
  register: async (req, res) => {
    try {
      const { user_name, email, password } = req.body

      const salt = await bcrypt.genSalt(10)
      const hashed = await bcrypt.hash(password, salt)

      const newUser = {
        user_name,
        email,
        password: hashed,
      }

      const data = await Model.create(newUser)

      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },
  login: async (req, res) => {
    try {
      let user = await Model.findOne({ where: { user_name: req.body.user_name }, raw: true })

      if (!user) {
        throw new Error('Wrong username')
      }

      const validPassword = await bcrypt.compare(req.body.password, user.password)

      if (!validPassword) {
        throw new Error('Wrong password')
      }

      if (user && validPassword) {
        const access_token = generateToken.accessToken(user)
        const refresh_token = generateToken.refreshToken(user)

        res.cookie('refresh_token', refresh_token, {
          httpOnly: true,
          secure: false,
          path: '/',
          sameSite: 'strict',
        })

        user = {
          ...user,
          access_token,
        }

        delete user.password
      }

      return ResponseHandle.success(res, user)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },
}

export default AuthControllers
