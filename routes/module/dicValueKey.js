const express = require('express');
const router = express.Router();
const dic = require('../../controller/dicValueCtrl')

router.post('/getValue', dic.getValue)

module.exports = router;
