import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'

const createToken = () => {
  let payload = { username: 'luuquangtri95' }
  let token = jwt.sign(payload, process.env.JWT_SECRET, (err, data) => {
    if (err) {
      console.log(err)
    }

    console.log('data', data)
  })

  return token
}

const verifyToken = (token) => {
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(err)
    }

    console.log(decoded)

    return decoded
  })
}

export default {
  createToken,
  verifyToken,
}
