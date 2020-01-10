import Vue from "vue";
import Vuex from "vuex";

import ModuleParametrage from './modules/parametres/index'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      parametres:ModuleParametrage
   
      
    }
  })
  