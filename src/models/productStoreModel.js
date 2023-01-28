import { DataTypes } from 'sequelize'
import postgresSequelize from '../configs/postgres/database.js'

const Model = postgresSequelize.define('products_stores', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  store_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

Model.sync()
  .then(() => {
    /**
     * define relationship two model when model created
     */
  })
  .catch((err) => console.log(err))

export default Model
