// 載入Express、設定路由
const express = require('express')
const app = express()
const port = 3000

// 載入handlebars
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

//設定樣板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' })) //(樣板引擎名稱, 預設佈局使用main的檔案)
app.set('view engine', 'handlebars') // 告訴Express要設定的view engine是handlebars

// 告訴 Express 靜態檔案的資料夾位置
app.use(express.static('public'))

// 路由設定
app.get('/', (req, res) => {
  res.render('index', { restaurant: restaurantList.results })
})

//監聽路由
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})