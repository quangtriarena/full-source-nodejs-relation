import StoreRepositories from '../repositories/storeRepository.js'

const StoreServices = {
  count: async (req) => {
    try {
      return await StoreRepositories.count()
    } catch (error) {
      throw error
    }
  },

  find: async (req) => {
    try {
      return await StoreRepositories.find(req.query)
    } catch (error) {
      throw error
    }
  },

  findById: async (req) => {
    try {
      const { id } = req.params
      return await StoreRepositories.findById(id)
    } catch (error) {
      throw error
    }
  },

  create: async (req) => {
    try {
      const data = req.body

      return await StoreRepositories.create(data)
    } catch (error) {
      throw error
    }
  },

  update: async () => {},

  delete: async () => {},
}

export default StoreServices
