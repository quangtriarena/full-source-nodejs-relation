import WishlistCustomerModelLink from '../models/wishlistCustomerModel.js'

const fakeData = [
  {
    wishlist_id: 1,
    customer_id: 1,
  },
  {
    wishlist_id: 3,
    customer_id: 1,
  },
  {
    wishlist_id: 2,
    customer_id: 1,
  },
]

WishlistCustomerModelLink.bulkCreate(fakeData)
  .then(() => console.log('Fake data generated successfully.'))
  .catch((err) => console.error(err))
