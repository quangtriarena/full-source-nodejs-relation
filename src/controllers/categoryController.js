import ResponseHandle from '../helpers/responseHandler.js'
import CategoryServices from '../services/categoryService.js'

const CategoryControllers = {
  count: async (req, res) => {
    try {
      const data = await CategoryServices.count(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  find: async (req, res) => {
    try {
      const data = await CategoryServices.find(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  findById: async (req, res) => {
    try {
      const data = await CategoryServices.findById(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  create: async (req, res) => {
    try {
      const data = await CategoryServices.create(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  update: async (req, res) => {
    try {
      const data = await CategoryServices.update(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  delete: async (req, res) => {
    try {
      const data = await CategoryServices.delete(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },
}

export default CategoryControllers
