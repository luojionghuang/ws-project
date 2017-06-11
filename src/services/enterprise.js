import { fetchPost } from '@/conf/fetch'

/**
 * 加载企业数据
 * @param {Number} curPage 
 */
const loadEnterprises = (curPage) => fetchPost('/wsproject/enterprise/loadEnterprises', {
    curPage,
})

const loadAllEnterprises = () => fetchPost('/wsproject/enterprise/loadAllEnterprises', {})

/**
 * 添加企业
 * @param {Object} enterprise 
 */
const insertEnterprise = (enterprise) => fetchPost('/wsproject/enterprise/insertEnterprise', {
    name: enterprise.name,
    address: enterprise.address,
})

export {
    loadEnterprises,
    loadAllEnterprises,
    insertEnterprise,
}