const service = {
  HOST: 'localhost',
  PORT: 3000
}

const token = {
  KEY: 'test',
  CONFIG: {
    // 一小时过期
    expiresIn: '1h'
  }
}

const dataBase = {
  host: '47.100.139.75',
  port: '3306',
  user: 'gamingstore',
  password: 'wTkcEJeRN33JfWFi',
  database: 'gamingstore'
}

module.exports = {
  service,
  token,
  dataBase
}