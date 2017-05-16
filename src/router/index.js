import Vue from 'vue'
import VueRouter from 'vue-router'
import Navigation from '@/components/Navigation'
import TableList from '@/views/TableList'
import DetailList from '@/views/DetailList'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        component: Navigation,
        children: [{
            path: '',
            name: 'table',
            component: TableList,
        }, {
            path: 'detail',
            name: 'detail',
            component: DetailList,
        }]
    }]
})