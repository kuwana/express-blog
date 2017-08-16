const express = require('express')
    , logger = require('morgan')
    , bodyParser = require('body-parser')
    , app = express()
    , post = require('./src/post')

// ミドルウェアの設定
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

// 共通パラメーター処理
// app.param('userId', function (req, res, next, userId) {
//   req.params.userId = userId + 'です'
//   next()
// })

// ルーターモジュール
app.use('/posts', require('./src/post'))

// その他ルーティング
app.get('/', function(req, res) {
  res.send('top')
})

// サーバー起動
app.listen(3000)
console.log("listen port 3000")
