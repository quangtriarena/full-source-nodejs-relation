import { DataTypes } from 'sequelize'
import postgresSequelize from '../configs/postgres/database.js'

const Model = postgresSequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
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
