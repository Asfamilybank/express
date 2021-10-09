const sqlConnect = require('../util/connect')
const jwt = require('../util/token')
const { success, error, R } = require('../util/result')
const { sql, power, checkPower } = require('../util/constant')

getAdmin = (req, res) => {
  const startPage = parseInt(req.body.startPage) || req.body.startPage
  const limit = parseInt(req.body.limit) || req.body.limit
  const sqlArr = [startPage * limit, limit]
  const callBack = (err, data) => {
    if (err) {
      res.json(error())
    } else {
      res.json(success({}, data))
    }
  }
  sqlConnect(sql.ADMIN.GET, sqlArr, callBack)
}

login = (req, res) => {
  const { username, password } = req.body
  const sqlArr = [username, password]	
	const callBack = (err, data, fields) => {
    if (err) {
      res.json(error())
    } else if (data.length > 0) {
      const token = jwt.createToken({
        id: data[0].admin_id,
        name: data[0].admin_name,
				type: 'admin',
				power: data[0].admin_power + 10
      })
      res.send(success(R.LOGIN_SUCCESS, { token }))
    } else {
      res.json(error(R.LOGIN_ERROR))
    }
  }
  sqlConnect(sql.ADMIN.LOGIN, sqlArr, callBack)
  return
}

info = (req, res) => {
  const { token } = req.body
  const result = jwt.verifyToken(token)
  if (result.flag) {
    res.json(success(R.TOKEN_SUCCESS, result.data))
  } else {
    res.json(error(R.TOKEN_ERROR))
  }
  return
}

add = (req, res) => {
	if (!checkPower(power.ADMIN.ADD, req.body.tokenInfo.power)) {
		res.json(error(R.NO_PERMISSION))
		return
	}
  const { 
		admin_name,
		admin_password,
		display_name
	} = req.body
  const admin_power = ~~ req.body.admin_power
  const sqlArr = [
		admin_name,
		admin_password,
		display_name,
		admin_power
	]
  const callBack = (err, data, fields) => {
    if (err) {
			console.log(err)
      res.json(error(R.ADD_ERROR))
    } else {
      res.json(success(R.ADD_SUCCESS))
    }
  }
  sqlConnect(sql.ADMIN.ADD, sqlArr, callBack)
}

dele = (req, res) => {
  const admin_id = parseInt(req.body.admin_id) || req.body.admin_id
  const sqlArr = [admin_id]
  const callBack = (err, data, fields) => {
    if (err) {
      res.json(error(R.DELETE_ERROR))
    } else {
      res.json(success(R.ADD_SUCCESS))
    }
  }
  sqlConnect(sql.ADMIN.DELETE, sqlArr, callBack)
}

updatePower = (req, res) => {
  const { admin_id } = req.body
  const admin_power = parseInt(req.body.admin_power) || req.body.admin_power
  const sqlArr = [admin_id, admin_power]
  const callBack = (err, data, fields) => {
    if (err) {
      res.json(error(R.UPDATE_ERROR))
    } else {
      res.json(success(R.UPDATE_SUCCESS))
    }
    sqlConnect(sql.ADMIN.UPDATE_POWER, sqlArr, callBack)
  }
}

module.exports = {
  getAdmin,
  login,
  add,
  dele,
  updatePower,
  info
}
