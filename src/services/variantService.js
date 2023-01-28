import VariantRepositories from '../repositories/variantRepository.js'

const VariantServices = {
  count: async (req) => {
    try {
      return await VariantRepositories.count()
    } catch (error) {
      throw error
    }
  },

  find: async (req) => {
    try {
      return await VariantRepositories.find(req.query)
    } catch (error) {
      throw error
    }
  },

  findById: async (req) => {
    try {
      const { id } = req.params
      return await VariantRepositories.findById(id)
    } catch (error) {
      throw error
    }
  },

  create: async (req) => {
    try {
      const data = req.body

      return await VariantRepositories.create(data)
    } catch (error) {
      throw error
    }
  },

  update: async () => {},

  delete: async () => {},
}

export default VariantServices
