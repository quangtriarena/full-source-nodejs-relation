import WishlistProductModelLink from '../models/wishlistProductLinksModel.js'

const fakeData = [
  {
    wishlist_id: 1,
    product_id: 1,
  },
  {
    wishlist_id: 1,
    product_id: 2,
  },
  {
    wishlist_id: 2,
    product_id: 1,
  },
  {
    wishlist_id: 2,
    product_id: 2,
  },
]

WishlistProductModelLink.bulkCreate(fakeData)
  .then(() => console.log('Fake data generated successfully.'))
  .catch((err) => console.error(err))
