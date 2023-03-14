import express from 'express'
const routes = express.Router()

routes.get('/tests', (req, res) => {
  res.status(200).json({ message: 'hello test' })
})

export default routes
