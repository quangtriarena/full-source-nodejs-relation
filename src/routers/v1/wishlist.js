import express from 'express'
import WishlistModel from '../../models/wishlistModel'
const routes = express.Router()
import ProductShopifyModel from '../../models/productShopifyModel.js'
import CustomerModel from '../../models/customerModel.js'

routes.get('/wishlists', async (req, res) => {
  try {
    const data = await WishlistModel.findAll({
      where: {},
      attributes: ['id', 'name'],
      include: [
        {
          model: CustomerModel,
          attributes: ['id', 'name', 'shop'],
          include: [
            {
              model: ProductShopifyModel,
              attributes: ['id', 'product_id', 'handle'],
            },
          ],
        },
      ],
    })

    res.status(200).json({ success: true, data })
  } catch (error) {
    console.log(error)
  }
})

routes.get('/customers', async (req, res) => {
  try {
    const data = await CustomerModel.findAll({
      where: {},
      attributes: ['id', 'name', 'shop'],
      include: [
        {
          model: WishlistModel,
          attributes: ['id', 'name'],
          through: { attributes: [] },
          include: {
            model: ProductShopifyModel,
            attributes: ['id', 'product_id', 'handle'],
            through: { attributes: [] },
          },
        },
      ],
    })

    res.status(200).json({ success: true, data })
  } catch (error) {
    console.log(error)
  }
})

export default routes
