import ResponseHandle from '../helpers/responseHandler.js'
import ProductServices from '../services/productService.js'

const ProductControllers = {
  count: async (req, res) => {
    try {
      const data = await ProductServices.count(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  find: async (req, res) => {
    try {
      const data = await ProductServices.find(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  findById: async (req, res) => {
    try {
      const data = await ProductServices.findById(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  create: async (req, res) => {
    try {
      const data = await ProductServices.create(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  update: async (req, res) => {
    try {
      const data = await ProductServices.update(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  delete: async (req, res) => {
    try {
      const data = await ProductServices.delete(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },
}

export default ProductControllers
