import { DataTypes } from 'sequelize'
import postgresSequelize from '../configs/postgres/database.js'
import WishlistCustomerModel from '../models/wishlistCustomerModel.js'
import WishlistModel from '../models/wishlistModel.js'

const Model = postgresSequelize.define('customers', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  shop: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

Model.sync({ alter: true })
  .then(() => {
    /**
     * define relationship two model when model created
     */

    Model.belongsToMany(WishlistModel, {
      through: WishlistCustomerModel,
      foreignKey: 'customer_id',
    })
  })
  .catch((err) => console.log(err))

export default Model
