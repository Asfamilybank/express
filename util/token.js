const jwt = require('jsonwebtoken')
const { token } = require('../config/programConfig')
const _ = require('lodash')

const createToken = function (content) {
  return jwt.sign(content, token.KEY, token.CONFIG)
}

const verifyToken = function (tokenContent = '') {
  var flag = {
		data: {},
		flag: false
	}
  if (!tokenContent) {
    flag.flag = false
  }
  jwt.verify(tokenContent, token.KEY, (err, decode) => {
    if (err) {
			console.log(err)
      flag.flag = false
    } else {
      flag.flag = true
			flag.data = decode
    }
  })
  return flag
}

module.exports = {
  createToken,
  verifyToken
}