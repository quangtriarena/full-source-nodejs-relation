import ProductStoreModel from '../models/productStoreModel.js'

const fakeData = [
  {
    product_id: 1,
    store_id: 1,
  },
  {
    product_id: 1,
    store_id: 2,
  },
  {
    product_id: 1,
    store_id: 3,
  },
  {
    product_id: 2,
    store_id: 1,
  },
]

ProductStoreModel.bulkCreate(fakeData)
  .then(() => console.log('fake data success'))
  .catch((err) => console.log(err))
