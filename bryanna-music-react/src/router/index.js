import JRDiscover from '@/pages/discover'
import JRMine from '@/pages/mine'
import JRFriend from '@/pages/friend'

const routes = [
  {
    path: "/",
    exact: true,
    component: JRDiscover
  },
  {
    path: "/mine",
    component: JRMine
  },
  {
    path: "/friend",
    component: JRFriend
  },
]

export default routes;