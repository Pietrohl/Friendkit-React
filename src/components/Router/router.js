import Login from '../../pages/login';
import Landing from '../../pages/landing';
import Feed from '../../pages/feed';
import Signup from '../../pages/singup';

export const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/feed",
    component: Feed,
  },
  {
    path: "/signup",
    component: Signup
  },
  {
    path: "/",
    component: Landing
  }
];