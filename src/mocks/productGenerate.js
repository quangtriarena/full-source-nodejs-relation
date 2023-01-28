import ProductModel from '../models/productModel.js'

const fakeData = [
  {
    title: 'Iphone 12 pro max',
    price: 36,
    handle: 'handle 1',
    quantity: 43,
    status: 'publish',
    category_id: 1,
  },
  {
    title: 'iphone 11 pro max',
    price: 38,
    handle: 'handle 2',
    quantity: 72,
    status: 'publish',
    category_id: 1,
  },
  {
    title: 'macbook pro m1',
    price: 48,
    handle: 'handle 3',
    quantity: 62,
    status: 'publish',
    category_id: 1,
  },
  {
    title: 'samsung a12',
    price: 58,
    handle: 'handle 4',
    quantity: 36,
    status: 'publish',
    category_id: 2,
  },
  {
    title: 'samsung a7',
    price: 77,
    handle: 'handle 5',
    quantity: 26,
    status: 'publish',
    category_id: 2,
  },
  {
    title: 'samsung note 20 ultra',
    price: 96,
    handle: 'handle 6',
    quantity: 32,
    status: 'publish',
    category_id: 2,
  },
  {
    title: 'oppo neo 7',
    price: 71,
    handle: 'handle 7',
    quantity: 19,
    status: 'publish',
    category_id: 3,
  },
  {
    title: 'oppo prime',
    price: 58,
    handle: 'handle 8',
    quantity: 50,
    status: 'publish',
    category_id: 3,
  },
]

ProductModel.bulkCreate(fakeData)
  .then(() => console.log('Fake data generated successfully.'))
  .catch((err) => console.error(err))
