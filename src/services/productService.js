import ProductRepositories from '../repositories/productRepository.js'

const ProductServices = {
  count: async (req) => {
    try {
      return await ProductRepositories.count()
    } catch (error) {
      throw error
    }
  },

  find: async (req) => {
    try {
      return await ProductRepositories.find(req.query)
    } catch (error) {
      throw error
    }
  },

  findById: async (req) => {
    try {
      const { id } = req.params
      return await ProductRepositories.findById(id)
    } catch (error) {
      throw error
    }
  },

  create: async (req) => {
    try {
      const data = req.body

      return await ProductRepositories.create(data)
    } catch (error) {
      throw error
    }
  },

  update: async () => {},

  delete: async () => {},
}

export default ProductServices
