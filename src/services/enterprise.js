import { fetchPost } from '@/conf/fetch'

/**
 * 加载企业数据
 * @param {Number} curPage 
 */
const loadEnterprises = (curPage) => fetchPost('http://127.0.0.1:9000/wsproject/enterprise/loadEnterprises', {
    curPage,
})

const loadAllEnterprises = () => fetchPost('http://127.0.0.1:9000/wsproject/enterprise/loadAllEnterprises', {})

/**
 * 添加企业
 * @param {Object} enterprise 
 */
const insertEnterprise = (enterprise) => fetchPost('http://127.0.0.1:9000/wsproject/enterprise/insertEnterprise', {
    name: enterprise.name,
    address: enterprise.address,
})

export {
    loadEnterprises,
    loadAllEnterprises,
    insertEnterprise,
}