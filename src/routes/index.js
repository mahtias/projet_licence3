import Vue from "vue";
import VueRouter from "vue-router";
import store from '../vuex/store'

import parametreRoutes from "./parametres/parametreRoutes"
import personnelsRoutes from "./gestion_personnel/personnelsRoutes"

Vue.use(VueRouter);


const regroupementDesRoutes = [
  parametreRoutes,
  personnelsRoutes
 

];
const routes = [].concat(...regroupementDesRoutes);


const router = new VueRouter({
  routes,
    mode: "history"
});


router.beforeEach((to, from, next) => {
  // console.log(store)
   // check if the route requires authentication and user is not logged in
   if (to.matched.some(route => route.meta.requiresAuth) && !store.state.Utilisateurs.isLoggedIn) {
       // redirect to login page
      // next({ name: 'Login' })
       return
   }
 
   // if logged in redirect to dashboard
  //  if(to.path === '/' && store.state.Utilisateurs.isLoggedIn) {
  //     next({ name: 'ExerciceBudgetaire' })
  //      return
  //  }
 
   next()
 })
 

export default router;
