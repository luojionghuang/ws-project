import fetch from '@/conf/fetch'

/**
 * 分页加载整治列表
 * @param {Number} curPage 
 */
const loadRectificationMains = (curPage) => fetch('http://127.0.0.1:9000/wsproject/rectification/loadRectificationMains', {
    curPage,
})

const loadRectificationMain = (rectificationMainId) => fetch('http://127.0.0.1:9000/wsproject/rectification/loadRectificationMain', {
    rectificationMainId,
})

/**
 * 初始化整治信息
 * @param {Object} rectificationMain 
 */
const initRectificationMain = (rectificationMain) => fetch('http://127.0.0.1:9000/wsproject/rectification/initRectificationMain', {
    checkDate: rectificationMain.checkDate,
    enterpriseId: rectificationMain.enterpriseId,
})

/**
 * 修改整治信息
 * @param {*} enterpriseId 
 * @param {Object} rectificationMain 
 */
const modifyRectificationMain = (enterpriseId, rectificationMain) => fetch('http://127.0.0.1:9000/wsproject/rectification/modifyRectificationMain', {
    enterpriseId,
    fillUnit: rectificationMain.fillUnit,
    fillPerson: rectificationMain.fillPerson,
    checkDate: rectificationMain.checkDate,
    checkPerson: rectificationMain.checkPerson,
    situation: rectificationMain.situation.join(','),
    method: rectificationMain.method.join(','),
    dutyUnit: rectificationMain.dutyUnit,
    dutyPerson: rectificationMain.dutyPerson,
    finishDate: rectificationMain.finishDate,
    remark: rectificationMain.remark,
    isRecorded: rectificationMain.isRecorded,
    isReviewed: rectificationMain.isReviewed,
})

export {
    loadRectificationMains,
    loadRectificationMain,
    initRectificationMain,
    modifyRectificationMain,
}