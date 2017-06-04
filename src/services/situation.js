import { fetchPost } from '@/conf/fetch'

// let ipPre = 'http://127.0.0.1:9000'
let ipPre = ''

/**
 * 加载违规行为
 */
const loadSituations = () => fetchPost(ipPre + '/wsproject/situation/loadSituations', {});

export {
    loadSituations,
}