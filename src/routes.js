import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import ContactSingle from './components/ContactSingle';

export const routes = [
  {
    path: "/about",
    exact: true,
    component: About,
  },
  {
    path: "/contacts/:userId",
    exact: true,
    component: ContactSingle,
  },
  {
    path: "/contacts",
    exact: true,
    component: Contacts,
  },
  {
    path: "/",
    exact: true,
    component: Home,
  },
];
