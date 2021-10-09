/**
 * 请求回调函数
 * @callback callBack
 * @param err
 * @param data 返回的数据
 * @param fields
 */
const mysql = require('mysql')
const { dataBase } = require('../config/programConfig')

// 连接数据库，使用mysql的连接池连接方式
// 连接池对象
/**
 * 操作数据库
 * @param {String} sql sql语句
 * @param {Array} sqlArr sql语句占位符数据
 * @param {callBack} callBack 请求回调函数
 */
 function sqlConnect(sql, sqlArr, callBack) {
  var pool = mysql.createPool(dataBase)
  pool.getConnection((err, conn) => {
    if (err) {
      console.log('connect fail')
      console.log(err)
      return
    }
    console.log('connect success')
    // 事件驱动回调
    conn.query(sql, sqlArr, callBack)
    // 释放资源
    conn.release()
  })
}

module.exports = sqlConnect