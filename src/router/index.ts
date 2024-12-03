import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/Pages/Login/LoginPage'
import ScooterManagementPage from '@/views/Pages/ScooterManagement/ScooterManagementPage'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path:'/scooter-management',
      name: 'scooter-management',
      component: ScooterManagementPage
    }
  ]
})

export default router
