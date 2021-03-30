import About, { AboutContect, AboutCulture, AboutHistory, JoinUs } from "../pages/About";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import User from "../pages/User";

const routes = [
  {
    path:'/',
    exact:true,
    component: Home
  },
  {
    path:'/about',
    component: About,
    routes:[
      {
        path:'/about',
        exact:true,
        component:AboutHistory
      },
      {
        path:'/about/culture',
        component:AboutCulture
      },
      {
        path:'/about/contect',
        component:AboutContect
      },
      {
        path:'/about/join',
        component:JoinUs
      },
    ]
  },
  {
    path:'/profile',
    component: Profile
  },
  {
    path:'/user',
    component: User
  }
]

export default routes