import { DataTypes } from 'sequelize'
import postgresSequelize from '../configs/postgres/database.js'

const Model = postgresSequelize.define('variants', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  variant_name: {
    type: DataTypes.STRING,
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
