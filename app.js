// 載入Express、設定路由
const express = require('express')
const app = express()
const port = 3000

// 載入handlebars
const exhbs = require('express-handlebars')

//設定樣板引擎
app.engine('handlebars', exhbs({ default: 'main'})) //(樣板引擎名稱, 預設佈局使用main的檔案)
app.set('view engine', 'handlebars') // 告訴Express要設定的view engine是handlebars

// 路由設定
app.get('/', (req, res) => {
  res.send('This is the Restaurant List built with Express')
})

//監聽路由
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})