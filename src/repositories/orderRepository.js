import { Op } from 'sequelize'
import OrderModel from '../models/orderModel.js'

const include = []

const OrderRepositories = {
  count: async () => {
    try {
      const counts = await OrderModel.count()
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

      const items = await OrderModel.findAll({
        where,
        include,
        limit: _limit,
        offset: (_page - 1) * _limit,
        order: [['createdAt', 'DESC']],
      })
      const total_items = await OrderModel.count()

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
      const entry = await OrderModel.findOne({ where: { id } })
      if (!entry) throw new Error('Not Found !')

      return entry
    } catch (error) {
      throw error
    }
  },

  create: async (data) => {
    try {
      return await OrderModel.create(data)
    } catch (error) {
      throw error
    }
  },

  update: async () => {},

  delete: async () => {},
}

export default OrderRepositories
