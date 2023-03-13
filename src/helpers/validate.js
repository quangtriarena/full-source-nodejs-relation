import Joi from 'joi'
import ResponseHandle from './responseHandler'

const schema = Joi.object({
  user_name: Joi.string().required().min(3).max(20),
  password: Joi.string().required().min(3).max(20),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: ['com', 'net'] } }),
})

export default {
  create: async (req, res, next) => {
    try {
      await schema.validateAsync(req.body)

      next()
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },
}
