
import fonctions from "../../pages/parametrages/fonctions.vue";
import grade from '../../pages/parametrages/grade.vue';
import personnel from '../../pages/gestion_personnels/personnel.vue';

const parametreRoutes = [
  

     {
        path:"/creation-fonction",
        name:"fonctions",
        component:fonctions

     },

     {
      path:"/creation-personnel",
      name:"personnel",
      component:personnel

   },

     {
        path:"/creation-grade",
        name:"grade",
        component:grade
     },
    
  
     
]

export default parametreRoutes;

