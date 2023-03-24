import { DataTypes } from 'sequelize'
import postgresSequelize from '../configs/postgres/database.js'
import ProductModel from './productShopifyModel.js'
import CustomerModel from './customerModel.js'
import WishlistCustomerLinksModel from './wishlistCustomerModel.js'
import WishlistProductLinksModel from './wishlistProductLinksModel.js'

const Model = postgresSequelize.define('wishlists', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

Model.sync()
  .then(() => {
    /**
     * define relationship two model when model created
     */

    Model.belongsToMany(ProductModel, {
      through: WishlistProductLinksModel,
      foreignKey: 'wishlist_id',
    })

    Model.belongsToMany(CustomerModel, {
      through: WishlistCustomerLinksModel,
      foreignKey: 'wishlist_id',
    })
  })
  .catch((err) => console.log(err))

export default Model
