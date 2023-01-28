import CategoryRepositories from '../repositories/categoryRepository.js'

const CategoryServices = {
  count: async (req) => {
    try {
      return await CategoryRepositories.count()
    } catch (error) {
      throw error
    }
  },

  find: async (req) => {
    try {
      return await CategoryRepositories.find(req.query)
    } catch (error) {
      throw error
    }
  },

  findById: async (req) => {
    try {
      const { id } = req.params
      return await CategoryRepositories.findById(id)
    } catch (error) {
      throw error
    }
  },

  create: async (req) => {
    try {
      const data = req.body

      return await CategoryRepositories.create(data)
    } catch (error) {
      throw error
    }
  },

  update: async () => {},

  delete: async () => {},
}

export default CategoryServices
