import CustomerModel from '../models/customerModel.js'

const fakeData = [
  {
    name: 'tri',
    shop: 'tamaki-co-shop.myshopify.com',
  },
  {
    name: 'nhan',
    shop: 'arena-app-tha.myshopify.com',
  },
]

CustomerModel.bulkCreate(fakeData)
  .then(() => console.log('Fake data generated successfully.'))
  .catch((err) => console.error(err))
