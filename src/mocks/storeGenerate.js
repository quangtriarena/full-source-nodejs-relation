import StoreModel from '../models/storeModel.js'

const fakeData = [
  {
    name: 'FPT shop',
    address: '166/16/2 dang van bi, phuong 25, thu duc',
  },
  {
    name: 'Nguyen kim',
    address: '14/2 vo van ngan tp thu duc',
  },
  {
    name: 'The Gioi Di Dong',
    address: '101/4a nguyen van dau, binh thanh',
  },
]

StoreModel.bulkCreate(fakeData)
  .then(() => console.log('fake data store success'))
  .catch((err) => console.log(err))
