import crypto from 'crypto'
import dotenv from 'dotenv'

dotenv.config()

const { SHOPIFY_APP_SECRET } = process.env

export default function verifyHmac(query) {
  let urlToCheck = ''

  const { hmac } = query
  for (let key in query) {
    if (key !== 'hmac') {
      urlToCheck += `${key}=${query[key]}&`
    }
  }

  urlToCheck = urlToCheck.slice(0, -1)
  let hashToCheck = crypto.createHmac('SHA256', SHOPIFY_APP_SECRET).update(urlToCheck).digest('hex')

  console.log('🚀🚀🚀 ~ file: verifyHmac.js:21 ~ verifyHmac ~ hashToCheck:', hashToCheck)

  return hashToCheck == hmac
}
