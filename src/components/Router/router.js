import Login from '../../pages/login';
import Landing from '../../pages/landing/index';
import Feed from '../../pages/feed/index';
import Signup from '../../pages/singup/index';
import AboutScreen from '../../screens/AboutScreen';
import ProfileMainScreen from '../../screens/ProfileMainScreen';

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
  },
  {
    path: '/about',
    component: AboutScreen
  },
  {
    path: '/profile-main',
    component: ProfileMainScreen
  }
];