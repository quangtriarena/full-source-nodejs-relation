import UserModel from '../models/userModel.js'

const include = []

const UserRepositories = {
  count: async () => {
    try {
      const counts = await UserModel.count()
      return {
        counts,
      }
    } catch (error) {
      throw error
    }
  },

  find: async ({ page, limit }) => {
    try {
      const _page = page ? (Number(page) >= 1 ? Number(page) : 1) : 1
      const _limit = limit ? (Number(limit) >= 1 ? Number(limit) : 10) : 10

      let where = {}

      const items = await UserModel.findAll({
        where,
        include,
        limit: _limit,
        offset: (_page - 1) * _limit,
        order: [['createdAt', 'DESC']],
      })
      const total_items = await UserModel.count()

      return {
        items,
        pagination: {
          page: _page,
          limit: _limit,
          total_items,
          total_page: Math.ceil(total_items / _limit),
        },
      }
    } catch (error) {
      throw error
    }
  },

  findById: async (id) => {
    try {
      const entry = await UserModel.findOne({ where: { id } })
      if (!entry) throw new Error('Not Found !')

      return entry
    } catch (error) {
      throw error
    }
  },

  create: async (data) => {
    try {
      return await UserModel.create(data)
    } catch (error) {
      throw error
    }
  },

  update: async () => {},

  delete: async (id) => {
    try {
      return await UserModel.destroy({ where: { id } })
    } catch (error) {
      throw error
    }
  },
}

export default UserRepositories
