const { dicValueKey } = require('../util/constant')
const { success, error, R } = require('../util/result')

getValue = (req, res) => {
  const dicKey = req.body.dicKey
  let dicValue = dicValueKey[dicKey]
  if (dicValue === undefined) {
    res.json(error(R.DICKEY_ERROR))
  } else {
    res.json(success(R.DICKEY_SUCCESS, dicValue))
  }
}

module.exports = {
  getValue
}