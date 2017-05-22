import fetch from '@/conf/fetch'

/**
 * 分页加载整治列表
 * @param {Number} curPage 
 */
const loadRectifications = (curPage) => fetch('http://127.0.0.1:9000/wsproject/rectification/loadRectifications', {
    curPage,
})

/**
 * 初始化整治信息
 * @param {Object} rectification 
 */
const insertRectification = (rectification) => fetch('http://127.0.0.1:9000/wsproject/rectification/insertRectification', {
    checkDate: rectification.checkDate,
    enterpriseId: rectification.enterpriseId,
})

export {
    loadRectifications,
    insertRectification,
}