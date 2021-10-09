var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var app = express()
var cors = require('cors')

// 改写
var http = require('http')
var server = http.createServer(app)

// 使用中间件
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// 日志
const log = require('./log')
app.use(log)

// lodash
const _ = require('lodash')
global._ = _

// 路由
var indexRouter = require('./routes/index')
app.use('/api', indexRouter)

// catch 404 and forward to error handler
let { error, R } = require('./util/result')
app.use(function (req, res, next) {
  res.json(error(R.API_ERROR))
})

const { service } = require('./config/programConfig')
server.listen(service.PORT, () => {
  console.log(`Server running at http://${service.HOST}:${service.PORT}/`)
})