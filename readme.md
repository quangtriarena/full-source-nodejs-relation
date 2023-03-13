# 1 product => n store

# 1 store => n product

```
const express = require('express');
const app = express();
const router = express.Router();

// Xử lý yêu cầu GET tại cấp ứng dụng
app.get('/', (req, res) => {
  res.send('Hello from the application level!');
});

// Xử lý yêu cầu GET tại cấp router
router.get('/', (req, res) => {
  res.send('Hello from the router level!');
});

// Sử dụng router cho tất cả các yêu cầu GET bắt đầu bằng '/router'
app.use('/router', router);

// Lắng nghe các yêu cầu tại cổng 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

```
