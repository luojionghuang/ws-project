import { fetchGet, fetchPost } from '@/conf/fetch'
import qs from 'qs'

/**
 * 分页加载整治列表
 * @param {Number} curPage 
 */
const loadRectificationMains = (curPage) => fetchGet('http://127.0.0.1:9000/wsproject/rectification/loadRectificationMains', {
    curPage,
})

const loadRectification = (rectificationMainId) => fetchPost('http://127.0.0.1:9000/wsproject/rectification/loadRectification/' + rectificationMainId, {})

const initRectificationMain = (rectificationMain) => fetchPost('http://127.0.0.1:9000/wsproject/rectification/initRectificationMain', rectificationMain)

/**
 * 初始化整治信息
 * @param {Object} rectification 
 */
const recordRectification = (rectification) => fetchPost('http://127.0.0.1:9000/wsproject/rectification/recordRectification', {
    rectification: JSON.stringify(rectification)
})

export {
    loadRectificationMains,
    loadRectification,
    initRectificationMain,
    recordRectification,
}