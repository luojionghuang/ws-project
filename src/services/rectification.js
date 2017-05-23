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
const initRectification = (rectification) => fetch('http://127.0.0.1:9000/wsproject/rectification/initRectification', {
    checkDate: rectification.checkDate,
    enterpriseId: rectification.enterpriseId,
})

/**
 * 修改整治信息
 * @param {Object} rectification 
 */
const modifyRectification = (rectification) => fetch('http://127.0.0.1:9000/wsproject/rectification/modifyRectification', {
    checkDate: rectification.checkDate,
    checkPerson: rectification.checkPerson,
    situation: rectification.situation,
    method: rectification.method,
    dutyUnit: rectification.dutyUnit,
    dutyPerson: rectification.dutyPerson,
    finishDate: rectification.finishDate,
    remark: rectification.remark,
})

export {
    loadRectifications,
    insertRectification,
    modifyRectification,
}