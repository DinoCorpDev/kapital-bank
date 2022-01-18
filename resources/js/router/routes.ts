import Home from '../pages/Home.vue';
import Register from '../pages/Register.vue';
import Creditos from '../pages/Creditos.vue';
import SolicitaCredito from '../pages/SolicitaCredito.vue';
import AdminDash from '../pages/AdminDash.vue';
import NotFound from '../pages/NotFound.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registro',
    name: 'Register',
    component: Register
  },
  {
    path: '/solicitud',
    name: 'SolicitarCredito',
    component: SolicitaCredito
  },
  {
    path: '/admin',
    name: 'AdminDash',
    component: AdminDash,
    // beforeEnter: AdminRoutes,
    children: [
      {
        path: 'creditos',
        name: 'Creditos',
        component: Creditos
      }
    ]
  }
  // {
  //   path: '*',
  //   component: NotFound
  // }
];
