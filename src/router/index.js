import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "about" */ '@/dashboard/pages/dashboard')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "about" */ '@/dashboard/pages/dashboard')
  },
  {
    path: '/announcements',
    name: 'announcements',
    component: () => import(/* webpackChunkName: "about" */ '@/announcements/pages/announcements')
  },
  {
    path: '/competences',
    name: 'competences',
    component: () => import(/* webpackChunkName: "about" */ '@/competences/pages/competences')
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import(/* webpackChunkName: "about" */ '@/courses/pages/courses')
  },
  {
    path: '/courses/:id',
    name: 'course-detail',
    component: () => import(/* webpackChunkName: "about" */ '@/courses/pages/course-detail')

  },
  {
    path: '/teachers',
    name: 'teachers',
    component: () => import(/* webpackChunkName: "about" */ '@/teachers/pages/teachers')
  },
  {
    path: '/teachers/:id',
    name: 'teacher-detail',
    component: () => import('@/teachers/pages/teacher-detail')
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: () => import('@/profile/pages/profile')
  },
  {
    path: "/top-teachers",
    name: 'top-teachers',
    component: () => import(/* webpackChunkName: "about" */ '@/top-teachers/pages/top-teachers')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
