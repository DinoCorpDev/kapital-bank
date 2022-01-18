import Vue from 'vue';
import routes from './routes';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

// const AdminRoutes = (to: any, from: any, next: any) => {
//   // store.dispatch('auth/authUser').then(res => {
//   //   console.log(res);
//   // });
//   const userRole = store.state.auth.userRole;
//   if (userRole === 'Admin') {
//     next();
//   } else {
//     next('/');
//   }
// };
// const verifieUser = () => {
//   store.dispatch('auth/getAuthUser').then(res => {
//     console.log(res);
//   });
// }
store.dispatch('auth/getAuthUser');

const x = (to: any, from: any, next: any) => {
  const authUser = store.state.auth.authUser;
  const isLoggedIn = store.state.auth.isLoggedIn;
  let userRole = store.state.auth.userRole;
  const isAdminRoute = to.path.includes('admin');

  console.log('x', isLoggedIn, userRole, to);

  if (!isLoggedIn) {
    if (isAdminRoute) {
      window.location.href = '/login';
      // next({ name: 'Home' });
    } else {
      next();
    }
  }

  if (isLoggedIn) {
    if ((userRole === 'Admin' && isAdminRoute) || (userRole === 'Admin' && !isAdminRoute)) {
      console.log('B1');
      next();
    } else if (userRole === 'User' && isAdminRoute) {
      console.log('B2');
      next({ name: 'Home' });
    } else if (userRole === 'User' && !isAdminRoute) {
      console.log('B3');
      next();
    }
  }

  // if (!isLoggedIn) {
  //   store
  //     .dispatch('auth/getAuthUser')
  //     .then(res => {
  //       console.log(to);

  //       userRole = store.state.auth.userRole;

  //       if ((userRole === 'Admin' && isAdminRoute) || (userRole === 'Admin' && !isAdminRoute)) {
  //         console.log('A1');
  //         next();
  //       } else if (userRole === 'User' && isAdminRoute) {
  //         console.log('A2');
  //         next({ name: 'Home' });
  //       } else if (userRole === 'User' && !isAdminRoute) {
  //         console.log('A3');
  //         next();
  //       }
  //     })
  //     .catch(() => {
  //       next();
  //     });
  // } else if (isLoggedIn) {
  //   if ((userRole === 'Admin' && isAdminRoute) || (userRole === 'Admin' && !isAdminRoute)) {
  //     console.log('B1');
  //     next();
  //   } else if (userRole === 'User' && isAdminRoute) {
  //     console.log('B2');
  //     next({ name: 'Home' });
  //   } else if (userRole === 'User' && !isAdminRoute) {
  //     console.log('B3');
  //     next();
  //   }
  // }
};

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach(x);

export default router;
