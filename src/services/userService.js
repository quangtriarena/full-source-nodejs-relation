import UserRepositories from '../repositories/userRepository.js'

const UserServices = {
  count: async (req) => {
    try {
      return await UserRepositories.count()
    } catch (error) {
      throw error
    }
  },

  find: async (req) => {
    try {
      return await UserRepositories.find(req.query)
    } catch (error) {
      throw error
    }
  },

  findById: async (req) => {
    try {
      const { id } = req.params
      return await UserRepositories.findById(id)
    } catch (error) {
      throw error
    }
  },

  create: async (req) => {
    try {
      const data = req.body

      return await UserRepositories.create(data)
    } catch (error) {
      throw error
    }
  },

  update: async () => {},

  delete: async (req, res) => {
    try {
      const { id } = req.params

      return await UserRepositories.delete(id)
    } catch (error) {
      throw error
    }
  },
}

export default UserServices
