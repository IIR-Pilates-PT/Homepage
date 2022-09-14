import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
import AboutView from '../views/AboutView.vue'
import BeforeAfterView from '../views/BeforeAfterView.vue'
import ReviewView from '../views/ReviewView.vue'
import ProgramView from '../views/ProgramView.vue'
import BranchView from '../views/BranchView.vue'
import NoticeView from '../views/NoticeView.vue'
import EventView from '../views/EventView.vue'

// branch - sub router
import BranchSnu from '../components/BranchSnu.vue'
import BranchMia from '../components/BranchMia.vue'
import BranchNowon from '../components/BranchNowon.vue'
import BranchSuyu from '../components/BranchSuyu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/beforAfter',
      name: 'beforAfter',
      component: BeforeAfterView
    },
    {
      path: '/review',
      name: 'review',
      component: ReviewView
    },
    {
      path: '/program',
      name: 'program',
      component: ProgramView
    },
    {
      path: '/branch',
      name: 'branch',
      component: BranchView,
      children: [
        {
          path: 'snu',
          component: BranchSnu
        },
        {
          path: 'mia',
          component: BranchMia
        },
        {
          path: 'nowon',
          component: BranchNowon
        },
        {
          path: 'suyu',
          component: BranchSuyu
        }
      ]
    },
    {
      path: '/notice',
      name: 'notice',
      component: NoticeView
    },
    {
      path: '/event',
      name: 'event',
      component: EventView
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
