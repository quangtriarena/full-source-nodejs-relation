import CategoryModel from '../models/categoryModel.js'

const fakeData = [
  {
    category_name: 'apple',
    category_description: 'thiet bi apple',
  },
  {
    category_name: 'samsung',
    category_description: 'thiet bi samsungs',
  },
  {
    category_name: 'oppo',
    category_description: 'thiet bi oppo',
  },
]

CategoryModel.bulkCreate(fakeData)
  .then(() => console.log('Fake data generated successfully.'))
  .catch((err) => console.error(err))
