import ResponseHandle from '../helpers/responseHandler.js'
import OrderServices from '../services/orderService.js'

const OrderControllers = {
  count: async (req, res) => {
    try {
      const data = await OrderServices.count(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  find: async (req, res) => {
    try {
      const data = await OrderServices.find(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  findById: async (req, res) => {
    try {
      const data = await OrderServices.findById(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  create: async (req, res) => {
    try {
      const data = await OrderServices.create(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  update: async (req, res) => {
    try {
      const data = await OrderServices.update(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },

  delete: async (req, res) => {
    try {
      const data = await OrderServices.delete(req)
      return ResponseHandle.success(res, data)
    } catch (error) {
      return ResponseHandle.error(res, error)
    }
  },
}

export default OrderControllers
