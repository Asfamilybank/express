const sqlConnect = require('../util/connect')
const { success, error, R } = require('../util/result')

/**
 * 获取图片
 * @param {Number} imgId 图片id
 * @return {String} 图片地址
 */
function getImage(imgId) {
	const sql = 'select image_address from image where image_id=?'
	const sqlArr = [imgId]
	const callBack = (err, data) => {
		if (err) {
			return error(error(R.IMAGE_ERROR))
		} else {
			return success(R.IMAGE_SUCCESS, data)
		}
	}
	sqlConnect(sql, sqlArr, callBack)
}

function getImageList(imgStr) {
	const imgArr = imgStr.split(',')
	const sql = 'select image_address from image'
}

module.exports = {
	getImage,
	getImageList
}