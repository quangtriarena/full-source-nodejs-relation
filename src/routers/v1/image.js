import express from 'express'
const routes = express.Router()

const middleware1 = (req, res, next) => {
  console.log('abc')
  next()
}
const middleware2 = (req, res, next) => {
  console.log('bc')
  next()
}
const middleware3 = (req, res, next) => {
  console.log('f')
  next()
}

routes.get('/images', [middleware1, middleware2, middleware3], (req, res) => {
  res.status(200).json({ message: 'images route, list images' })
})

export default routes
