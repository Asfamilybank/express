resultData = data => {
  let temp = {}
  if (typeof data === Array) {
    temp.rows = data
    temp.total = data.length
  } else {
    temp = data
  }
  return temp
}

const success = function ({ code = 20000, message = '成功' }, data = {}) {
  return {
    success: true,
    code,
    message,
    data: resultData(data)
  }
}

const error = function ({ code = 20001, message = '失败' }, data = {}) {
  return {
    success: false,
    code,
    message,
    data: resultData(data)
  }
}

const R = {
  LOGIN_SUCCESS: { message: '登录成功' },
  LOGIN_ERROR: { code: 22001, message: '用户名或密码错误' },
  TOKEN_SUCCESS: { code: 20000, message: '请求成功' },
  TOKEN_ERROR: { code: 22002, message: '无效的请求' },
  API_ERROR: { message: '无效的接口' },
	NO_PERMISSION: { message: '权限不足'},

  // 常数
  DICKEY_SUCCESS: { message: '查找字典成功' },
  DICKEY_ERROR: { message: '字典key不存在' },
  IMAGE_SUCCESS: { message: '查找图片成功' },
  IMAGE_ERROR: { message: '查找图片失败' },

  // 操作
  ADD_SUCCESS: { message: '添加成功' },
  ADD_ERROR: { message: '添加失败' },
  DELETE_SUCCESS: { message: '删除成功' },
  DELETE_ERROR: { message: '删除失败' },
  UPDATE_SUCCESS: { message: '保存成功' },
  UPDATE_ERROR: { message: '保存失败' },

}

module.exports = {
  success,
  error,
  R
}