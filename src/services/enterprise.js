import fetch from '@/conf/fetch'

/**
 * 加载企业数据
 * @param {Number} curPage 
 */
const loadEnterprises = (curPage) => fetch('http://127.0.0.1:9000/wsproject/enterprise/loadEnterprises', {
    curPage,
})
/**
 * 添加企业
 * @param {Object} enterprise 
 */
const insertEnterprise = (enterprise) => fetch('http://127.0.0.1:9000/wsproject/enterprise/insertEnterprise', {
    name: enterprise.name,
    address: enterprise.address,
})

export {
    loadEnterprises,
    insertEnterprise,
}