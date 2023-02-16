// import jwt from 'jsonwebtoken'

// export default function verifyToken(req, res, next) {
//   const token = req.headers['authorization']

//   if (!token) {
//     return res.status(403).send({
//       message: 'No token provided.',
//     })
//   }

//   const access_token = token.split(' ')[1]

//   jwt.verify(access_token, process.env.JWT_SECRET, (err, user) => {
//     if (err) {
//       return res.status(403).send({
//         message: 'Invalid token.',
//       })
//     }

//     req.user = user
//     next()
//   })
// }
