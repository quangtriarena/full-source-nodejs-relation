import app from './index'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
  console.log(`app run ${PORT} , http://localhost:${PORT}`)
})
