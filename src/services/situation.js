import { fetchPost } from '@/conf/fetch'

/**
 * 加载违规行为
 */
const loadSituations = () => fetchPost('/wsproject/situation/loadSituations', {});

export {
    loadSituations,
}