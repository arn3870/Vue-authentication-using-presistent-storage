import TheLoginPage from '../pages/LoginPage.vue'
import TheSignupPage from '../pages/SignupPage.vue'
const routes = [
  {
    path: '/',
    component: TheLoginPage,
    // children: [
    //   { path: '/signup', component: TheSignupPage }
    // ]
  },
{
  path: '/signup',
  component: TheSignupPage
}

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue')
  // }
]

export default routes
