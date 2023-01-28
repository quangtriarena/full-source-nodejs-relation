import { DataTypes } from 'sequelize'
import postgresSequelize from '../configs/postgres/database.js'
import CategoryModel from './categoryModel.js'
import StoreModel from './storeModel.js'
import ProductStoreModel from './productStoreModel.js'

const Model = postgresSequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  handle: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  status: {
    type: DataTypes.ENUM('publish', 'archive', 'draft'),
    defaultValue: 'publish',
  },

  category_id: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },

  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 100,
  },
})

Model.sync()
  .then(() => {
    /**
     * define relationship two model when model created
     */
    Model.belongsToMany(StoreModel, {
      through: ProductStoreModel,
      foreignKey: 'product_id',
    })

    Model.belongsTo(CategoryModel, {
      foreignKey: 'category_id',
    })
  })
  .catch((err) => console.log(err))

export default Model
