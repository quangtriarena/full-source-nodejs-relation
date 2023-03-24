import WishlistModel from '../models/wishlistModel.js'

const fakeData = [
  {
    name: 'wishlist1',
  },
  {
    name: 'wishlist2',
  },
  {
    name: 'wishlist3',
  },
]

WishlistModel.bulkCreate(fakeData)
  .then(() => console.log('Fake data generated successfully.'))
  .catch((err) => console.error(err))
