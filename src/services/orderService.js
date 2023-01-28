import OrderRepositories from '../repositories/orderRepository.js'

const OrderServices = {
  count: async (req) => {
    try {
      return await OrderRepositories.count()
    } catch (error) {
      throw error
    }
  },

  find: async (req) => {
    try {
      return await OrderRepositories.find(req.query)
    } catch (error) {
      throw error
    }
  },

  findById: async (req) => {
    try {
      const { id } = req.params
      return await OrderRepositories.findById(id)
    } catch (error) {
      throw error
    }
  },

  create: async (req) => {
    try {
      const data = req.body

      return await OrderRepositories.create(data)
    } catch (error) {
      throw error
    }
  },

  update: async () => {},

  delete: async () => {},
}

export default OrderServices
