import Vue from 'vue'
import VueRouter from 'vue-router'
import Navigation from '@/components/Navigation'
import RectificationTable from '@/views/RectificationTable'
import RectificationDetail from '@/views/RectificationDetail'
import Enterprise from '@/views/Enterprise'
import Situation from '@/views/Situation'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        component: Navigation,
        children: [{
            path: '',
            redirect: '/rectificationTable',
        }, {
            path: 'rectificationTable',
            name: 'rectificationTable',
            component: RectificationTable,
        }, {
            path: 'rectificationDetail',
            name: 'rectificationDetail',
            component: RectificationDetail,
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