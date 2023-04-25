import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TenantCreate from '../views/TenantCreate.vue'
import TenantEdit from '../views/TenantEdit.vue'
import TenantList from '../views/TenantList.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/tenants',
    name: 'TenantList',
    component: TenantList
  },
  {
    path: '/tenants/create',
    name: 'TenantCreate',
    component: TenantCreate
  },
  {
    path: '/tenants/:id/edit',
    name: 'TenantEdit',
    component: TenantEdit,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
