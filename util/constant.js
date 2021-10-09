const _ = require('lodash')

const dicValueKey = {
  ADMIN_POWER: {
    rows: [
      { id: 0, value: '超级管理员' },
      { id: 1, value: '普通管理员' },
      { id: 2, value: '商家管理员' },
      { id: 3, value: '游戏管理员' },
      { id: 4, value: '周边管理员' },
      { id: 5, value: '评价管理员' },
      { id: 6, value: '订单管理员' },
      { id: 7, value: '标签管理员' },
      { id: 8, value: '看板管理员' }
    ],
    total: 9
  }
}

const sql = {
	ADMIN: {
		GET: `select * from admin limit ?,?`,
		LOGIN: 'select * from admin where admin_name=? and admin_password=?',
		ADD: 'insert into admin(admin_name,admin_password,display_name,admin_power) values(?, ?, ?, ?)',
		DELETE: 'delete from admin where admin_id=?',
		UPDATE_POWER: 'update admin where admin_id=? set power=?'
	}
}

const power = {
	ADMIN: {
		GET: { type: 'admin', powers: [0] },
		ADD: { type: 'admin', powers: [0] },
		DELETE: { type: 'admin', powers: [0] },
		UPDATE_POWER: { type: 'admin', powers: [0] }
	}
}

const checkPower = function (arr, p) {
	let type = p % 10
	switch(type){
		case 1:
			type = 'admin'
			break
	}
	if (arr.type !== type) {
		return false
	}
	if (arr.powers) {
		return true
	} else {
		return _.includes(arr.powers, p / 10 % 10)
	}
}

module.exports = {
  dicValueKey,
	sql,
	power,
	checkPower
}