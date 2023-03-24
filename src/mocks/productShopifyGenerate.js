import ProductShopifyModel from '../models/productShopifyModel.js'

const fakeData = [
  {
    product_id: '123',
    handle: 'iphone-12',
  },
  {
    product_id: '234',
    handle: 'iphone-13',
  },
]

ProductShopifyModel.bulkCreate(fakeData)
  .then(() => console.log('Fake data generated successfully.'))
  .catch((err) => console.error(err))
