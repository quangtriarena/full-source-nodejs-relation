import { DataTypes } from 'sequelize'
import postgresSequelize from '../configs/postgres/database.js'

const Model = postgresSequelize.define('products_orders', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  product_id: {
    type: DataTypes.INTEGER,
  },

  order_id: {
    type: DataTypes.INTEGER,
  },
})

export default Model
