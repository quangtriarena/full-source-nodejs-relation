import { DataTypes } from 'sequelize'
import postgresSequelize from '../configs/postgres/database.js'

const Model = postgresSequelize.define('orders', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: true,
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
