import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/servers'
  },
  {
    path: '/login',
    component: () => import('@/views/IniciarSesionPage.vue')
  },
  {
    path: '/register',
    component: () => import('@/views/RegistroPage.vue')
  },
  {
    path: '/success',
    component: () => import('@/views/CuentaCreadaPage.vue')
  },
  {
    path: '/recover',
    component: () => import('@/views/RecuperarContraseñaPage.vue')
  },
  {
    path: '/home/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/home/servers'
      },
      {
        path: 'servers',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'createServer',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'messages',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'profile',
        component: () => import('@/views/Tab4Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
