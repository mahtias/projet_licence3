import Vue from "vue";
import Vuex from "vuex";

import ModuleParametrage from './modules/parametres/index'
//import ModuleGestionPersonnel from './modules/gestion_personnel/index'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      parametres:ModuleParametrage,
     // gestion_personnel:ModuleGestionPersonnel
   
      
    }
  })
  