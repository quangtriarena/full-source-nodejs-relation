import ProductModel from '../models/productModel.js'
import CategoryModel from '../models/categoryModel.js'
import StoreModel from '../models/storeModel.js'
import { Op } from 'sequelize'

const include = [
  { model: CategoryModel, attributes: ['id', 'category_name', 'category_description'] },
  {
    model: StoreModel,
    attributes: ['id', 'name', 'address'],
    through: {
      attributes: [],
    },
  },
]

const ProductRepositories = {
  count: async () => {
    try {
      const counts = await ProductModel.count()
      return {
        counts,
      }
    } catch (error) {
      throw error
    }
  },

  find: async ({ page, limit, q, price }) => {
    try {
      const _page = page ? (Number(page) >= 1 ? Number(page) : 1) : 1
      const _limit = limit ? (Number(limit) >= 1 ? Number(limit) : 10) : 10
      let _price = price?.split('-').map((_i) => Number(_i)) || ''

      let where = {}

      if (q) {
        where = {
          ...where,
          [Op.or]: [
            {
              title: {
                [Op.like]: `%${q}%`,
              },
            },
          ],
        }
      }

      if (price) {
        where = {
          ...where,
          price: {
            [Op.between]: _price,
          },
        }
      }

      const items = await ProductModel.findAll({
        where,
        include,
        limit: _limit,
        offset: (_page - 1) * _limit,
        order: [['createdAt', 'DESC']],
      })

      const total_items = await ProductModel.count()

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
      const entry = await ProductModel.findOne({ where: { id }, include })
      if (!entry) throw new Error('Not Found !')

      return entry
    } catch (error) {
      throw error
    }
  },

  create: async (data) => {
    try {
      return await ProductModel.create(data)
    } catch (error) {
      throw error
    }
  },

  update: async () => {},

  delete: async () => {},
}

export default ProductRepositories
