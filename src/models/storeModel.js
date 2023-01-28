import { DataTypes } from 'sequelize'
import postgresSequelize from '../configs/postgres/database.js'
import ProductModel from './productModel.js'
import ProductStoreModel from './productStoreModel.js'

const Model = postgresSequelize.define('stores', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
})

Model.sync()
  .then(() => {
    /**
     * define relationship two model
     */
    Model.belongsToMany(ProductModel, {
      through: ProductStoreModel,
      foreignKey: 'store_id',
    })
  })
  .catch((err) => console.log(err))

export default Model
