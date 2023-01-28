import dotenv from 'dotenv'
dotenv.config()
import { Sequelize } from 'sequelize'

const { DATABASE, HOST, USERNAME, PASSWORD } = process.env

const postgresSequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: 'postgres',
  logging: false,
})

export default postgresSequelize
