import TheLoginPage from '../pages/LoginPage.vue'
import TheSignupPage from '../pages/SignupPage.vue'
import HomePage from '../pages/HomePage.vue'
const routes = [
  {
    path: '/',
    component: TheLoginPage,
  },
{
  path: '/signup',
  component: TheSignupPage
},

{
  path: '/home',
  name: "home",
  component: HomePage
}

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue')
  // }
]

export default routes
