import TheLoginPage from '../pages/LoginPage.vue'
import TheSignupPage from '../pages/SignupPage.vue'
import HomeView from '../pages/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'Default',
    component: TheLoginPage,
  },
  {
    path: '/login',
    nmae: 'Login',
    component: TheLoginPage,
  },
{
  path: '/signup',
  name: 'Signup',
  component: TheSignupPage
},
{
  path: "/ImageGallery",
  name: "Home",
  component: HomeView,
},
{
  path: "/search",
  name: "Search",
  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import("../pages/BreedSearchView.vue"),
},
]

export default routes
