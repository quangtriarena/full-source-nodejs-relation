import ResponseHandle from '../helpers/responseHandler.js'
import VariantServices from '../services/variantService.js'

const VariantControllers = {
  count: async (req, res) => {
    try {
      const data = await VariantServices.count(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  find: async (req, res) => {
    try {
      const data = await VariantServices.find(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  findById: async (req, res) => {
    try {
      const data = await VariantServices.findById(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  create: async (req, res) => {
    try {
      const data = await VariantServices.create(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  update: async (req, res) => {
    try {
      const data = await VariantServices.update(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  delete: async (req, res) => {
    try {
      const data = await VariantServices.delete(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },
}

export default VariantControllers
