import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import('../views/Courses.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/Logout.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/admin/courses',
    name: 'admin-courses',
    component: () => import('../views/AdminCourses.vue')
  },
  {
    path: '/admin/schedules',
    name: 'admin-schedules',
    component: () => import('../views/AdminSchedules.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
