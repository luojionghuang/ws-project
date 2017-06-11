import { fetchGet, fetchPost } from '@/conf/fetch'
import qs from 'qs'

/**
 * 分页加载整治列表
 * @param {Number} curPage 
 */
const loadRectificationMains = (curPage) => fetchGet('/wsproject/rectification/loadRectificationMains', {
    curPage,
})

const loadRectification = (rectificationMainId) => fetchPost('/wsproject/rectification/loadRectification/' + rectificationMainId, {})

const initRectificationMain = (rectificationMain) => fetchPost('/wsproject/rectification/initRectificationMain', rectificationMain)

/**
 * 初始化整治信息
 * @param {Object} rectification 
 */
const recordRectification = (rectification) => fetchPost('/wsproject/rectification/recordRectification', {
    rectification: JSON.stringify(rectification)
})

const exportDoc = (rectificationMainId) => fetchPost('/wsproject/rectification/exportDoc', {
    rectificationMainId
})

const delRectification = (rectificationMainId) => fetchPost('/wsproject/rectification/delRectification', {
    rectificationMainId
})

export {
    loadRectificationMains,
    loadRectification,
    initRectificationMain,
    recordRectification,
    exportDoc,
    delRectification,
}