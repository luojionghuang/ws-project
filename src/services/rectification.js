import { fetchGet, fetchPost } from '@/conf/fetch'
import qs from 'qs'

// let ipPre = 'http://127.0.0.1:9000'
let ipPre = ''

/**
 * 分页加载整治列表
 * @param {Number} curPage 
 */
const loadRectificationMains = (curPage) => fetchGet(ipPre + '/wsproject/rectification/loadRectificationMains', {
    curPage,
})

const loadRectification = (rectificationMainId) => fetchPost(ipPre + '/wsproject/rectification/loadRectification/' + rectificationMainId, {})

const initRectificationMain = (rectificationMain) => fetchPost(ipPre + '/wsproject/rectification/initRectificationMain', rectificationMain)

/**
 * 初始化整治信息
 * @param {Object} rectification 
 */
const recordRectification = (rectification) => fetchPost(ipPre + '/wsproject/rectification/recordRectification', {
    rectification: JSON.stringify(rectification)
})

const exportDoc = (rectificationMainId) => fetchPost(ipPre + '/wsproject/rectification/exportDoc', {
    rectificationMainId
})

export {
    loadRectificationMains,
    loadRectification,
    initRectificationMain,
    recordRectification,
    exportDoc,
}