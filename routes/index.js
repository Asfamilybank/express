var express = require('express')
var router = express.Router()
const _ = require('lodash')
const { verifyToken } = require('../util/token')
const { error, R } = require('../util/result')
const admin = require('./module/admin')
const dicValueKey = require('./module/dicValueKey')

// 检查token
router.use((req, res, next) => {
  const reg = /.*\/login/
  if (reg.test(req.originalUrl)) {
    next()
  } else {
		const tokenInfo = verifyToken(req.headers['x-token'])
		if (tokenInfo.flag) {
			req.body.tokenInfo = tokenInfo.data
			next()
  	} else {
    	res.json(error(R.TOKEN_ERROR))
    	return
  	}
	}
})

router.use('/admin', admin)
router.use('/dicValueKey', dicValueKey)

module.exports = router
