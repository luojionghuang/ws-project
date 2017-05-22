import fetch from '@/conf/fetch'

/**
 * 加载违规行为
 */
const loadSituations = () => fetch('http://127.0.0.1:9000/wsproject/situation/loadSituations', {});

export {
    loadSituations,
}