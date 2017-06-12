import { fetchPost } from '@/conf/fetch'

/**
 * 加载违规行为
 */
const loadSituations = () => fetchPost('/wsproject/situation/loadSituations', {})

/**
 * 添加或更新违规行为
 * @param {*} situation 
 */
const dealSituation = (situation) => fetchPost('/wsproject/situation/dealSituation', {
    id: situation.id,
    name: situation.name,
    sort: situation.sort,
})

/**
 * 删除违法行为
 * @param {*} id 
 */
const delSituation = (id) => fetchPost('/wsproject/situation/delSituation', {
    id
})

export {
    loadSituations,
    dealSituation,
    delSituation,
}