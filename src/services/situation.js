import { fetchPost } from '@/conf/fetch'

/**
 * 加载违规行为
 */
const loadSituations = () => fetchPost('http://127.0.0.1:9000/wsproject/situation/loadSituations', {});

export {
    loadSituations,
}