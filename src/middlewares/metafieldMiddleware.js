import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const access_token = process.env.ACCESS_TOKEN

const find = async () => {
  try {
    const res = await axios.get(
      `https://${process.env.STORE}/admin/api/${process.env.API_VER}/metafields.json`,
      {
        headers: {
          'X-Shopify-Access-Token': access_token,
          'Content-Type': 'application/json',
        },
      }
    )

    return res.data
  } catch (error) {
    throw error
  }
}

export default {
  find,
}
