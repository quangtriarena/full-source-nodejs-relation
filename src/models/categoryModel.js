import { DataTypes } from 'sequelize'
import postgresSequelize from '../configs/postgres/database.js'

const Model = postgresSequelize.define('categories', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  category_description: {
    type: DataTypes.STRING,
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
