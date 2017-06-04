import { fetchPost } from '@/conf/fetch'

// let ipPre = 'http://127.0.0.1:9000'
let ipPre = ''

/**
 * 加载企业数据
 * @param {Number} curPage 
 */
const loadEnterprises = (curPage) => fetchPost(ipPre + '/wsproject/enterprise/loadEnterprises', {
    curPage,
})

const loadAllEnterprises = () => fetchPost(ipPre + '/wsproject/enterprise/loadAllEnterprises', {})

/**
 * 添加企业
 * @param {Object} enterprise 
 */
const insertEnterprise = (enterprise) => fetchPost(ipPre + '/wsproject/enterprise/insertEnterprise', {
    name: enterprise.name,
    address: enterprise.address,
})

export {
    loadEnterprises,
    loadAllEnterprises,
    insertEnterprise,
}