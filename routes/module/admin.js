const express = require('express');
const router = express.Router();
const admin = require('../../controller/adminCtrl')

router.post('/getAdmin', admin.getAdmin)
router.post('/login', admin.login)
router.post('/add', admin.add)
router.post('/delete', admin.dele)
router.post('/updatePower', admin.updatePower)
router.post('/info', admin.info)

module.exports = router;
