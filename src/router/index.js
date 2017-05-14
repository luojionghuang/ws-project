import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import TableList from '@/views/TableList'
import DetailList from '@/views/DetailList'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'table',
    component: TableList
  }, {
    path: '/detail',
    name: 'detail',
    component: DetailList
  }]
})
