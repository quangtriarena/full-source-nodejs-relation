import { DataTypes } from 'sequelize'
import postgresSequelize from '../configs/postgres/database.js'
import WishlistModel from './wishlistModel.js'
import WishlistProductLinksModels from './wishlistProductLinksModel.js'

const Model = postgresSequelize.define('product_shopify', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  product_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  handle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

Model.sync()
  .then(() => {
    /**
     * define relationship two model when model created
     */

    Model.belongsToMany(WishlistModel, {
      through: WishlistProductLinksModels,
      foreignKey: 'product_id',
    })
  })
  .catch((err) => console.log(err))

export default Model
