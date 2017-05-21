import Vue from 'vue'
import VueRouter from 'vue-router'
import Navigation from '@/components/Navigation'
import TableList from '@/views/TableList'
import DetailList from '@/views/DetailList'
import Enterprise from '@/views/Enterprise'
import Situation from '@/views/Situation'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        component: Navigation,
        children: [{
            path: '',
            redirect: '/table',
        }, {
            path: 'table',
            name: 'table',
            component: TableList,
        }, {
            path: 'detail',
            name: 'detail',
            component: DetailList,
        }, {
            path: 'enterprise',
            name: 'enterprise',
            component: Enterprise,
        }, {
            path: 'situation',
            name: 'situation',
            component: Situation,
        }]
    }]
})