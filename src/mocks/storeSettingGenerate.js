import StoreSettingModel from '../models/store_settingsModel.js'

const fakeData = [
  {
    shop: 'tamaki-co-shop.myshopify.com',
    access_token: '123123123',
  },
  {
    shop: 'arena-app-tha.myshopify.com',
    access_token: '111111111',
  },
  {
    shop: 'teststore3app.myshopify.com',
    access_token: '222222222',
  },
]

StoreSettingModel.bulkCreate(fakeData)
  .then(() => console.log('Fake data generated successfully.'))
  .catch((err) => console.error(err))
