import fetch from '@/conf/fetch'

let loadSituations = (curPage) => fetch('http://127.0.0.1:9000/wsproject/situation/loadSituations', {});

export {
    loadSituations,
}