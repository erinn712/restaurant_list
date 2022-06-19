// 載入Express、設定路由
const express = require('express')
const app = express()
const port = 3000

// 路由設定
app.get('/', (req, res) => {
  res.send('This is the Restaurant List built with Express')
})

//監聽路由
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})