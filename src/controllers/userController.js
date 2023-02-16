import ResponseHandle from '../helpers/responseHandler.js'
import UserServices from '../services/userService.js'

const UserControllers = {
  count: async (req, res) => {
    try {
      const data = await UserServices.count(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  find: async (req, res) => {
    try {
      const data = await UserServices.find(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  findById: async (req, res) => {
    try {
      const data = await UserServices.findById(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  create: async (req, res) => {
    try {
      const data = await UserServices.create(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  update: async (req, res) => {
    try {
      const data = await UserServices.update(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  delete: async (req, res) => {
    try {
      const data = await UserServices.delete(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },
}

export default UserControllers
