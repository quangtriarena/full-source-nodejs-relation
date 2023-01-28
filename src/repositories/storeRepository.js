import { Op } from 'sequelize'
import StoreModel from '../models/storeModel.js'

const include = []

const StoreRepositories = {
  count: async () => {
    try {
      const counts = await StoreModel.count()
      return {
        counts,
      }
    } catch (error) {
      throw error
    }
  },

  find: async ({ page, limit, q }) => {
    try {
      const _page = page ? (Number(page) >= 1 ? Number(page) : 1) : 1
      const _limit = limit ? (Number(limit) >= 1 ? Number(limit) : 10) : 10

      let where = {}

      if (q) {
        where = {
          [Op.or]: [
            {
              title: {
                [Op.like]: `%${q}%`,
              },
            },
          ],
        }
      }

      const items = await StoreModel.findAll({
        where,
        include,
        limit: _limit,
        offset: (_page - 1) * _limit,
        order: [['createdAt', 'DESC']],
      })
      const total_items = await StoreModel.count()

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
      const entry = await StoreModel.findOne({ where: { id } })
      if (!entry) throw new Error('Not Found !')

      return entry
    } catch (error) {
      throw error
    }
  },

  create: async (data) => {
    try {
      return await StoreModel.create(data)
    } catch (error) {
      throw error
    }
  },

  update: async () => {},

  delete: async () => {},
}

export default StoreRepositories
