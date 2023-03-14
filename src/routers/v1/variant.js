import express from 'express'
const routes = express.Router()

routes.get('/variants', (req, res) => {
  res.status(200).json({ message: 'variant route' })
})

export default routes
