<template>
    <div>



<!-- debut form ajout personnnel  -->
  <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="fas fa-edit"></i>
                  Modal Examples
                </h3>
              </div>
              
             
            </div>

          </div>
        
        </div>
     
      </div>

<!-- affichage du tableau de bord de personnel --->

   
          <!-- <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box bg-info">
              <span class="info-box-icon"><i class="far fa-bookmark"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Bookmarks</span>
                <span class="info-box-number">41,410</span>

                <div class="progress">
                  <div class="progress-bar" style="width: 70%"></div>
                </div>
                <span class="progress-description">
                  70% Increase in 30 Days
                </span>
              </div>
              
            </div>
         
          </div> -->
         

        
          
          <!-- <div class="row" style="padding-left:400px;">
          <div class="col-md-3 col-sm-3 col-12">
            <div class="info-box bg-success">
              <span class="info-box-icon"><i class="far fa-thumbs-up"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Nombre de personnel</span>
                <span class="info-box-number">{{NombreDePersonnel}}</span>

                <div class="progress">
                  <div class="progress-bar" style="width: 70%"></div>
                </div>
                <span class="progress-description">
                  70% Increase in 30 Days
                </span>
              </div>
            
            </div>
           
          </div>
         
          <div class="col-md-3 col-sm-3 col-6">
            <div class="info-box bg-warning">
              <span class="info-box-icon"><i class="far fa-calendar-alt"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Events</span>
                <span class="info-box-number">41,410</span>

                <div class="progress">
                  <div class="progress-bar" style="width: 70%"></div>
                </div>
                <span class="progress-description">
                  70% Increase in 30 Days
                </span>
              </div>
            
            </div>
            
          </div>
 </div> -->



   <div class="row" style="padding-left:300px;">
          <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box">
              <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Nombre de personnel</span>
                <span class="info-box-number">{{NombreDePersonnel}}</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box">
              <span class="info-box-icon bg-success"><i class="far fa-flag"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Bookmarks</span>
                <span class="info-box-number">410</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box">
              <span class="info-box-icon bg-warning"><i class="far fa-copy"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Uploads</span>
                <span class="info-box-number">13,648</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          
          <!-- /.col -->
        </div>

          
          <th></th>
          <!-- /.col -->
          <!-- <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box bg-danger">
              <span class="info-box-icon"><i class="fas fa-comments"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Comments</span>
                <span class="info-box-number">41,410</span>

                <div class="progress">
                  <div class="progress-bar" style="width: 70%"></div>
                </div>
                <span class="progress-description">
                  70% Increase in 30 Days
                </span>
              </div>
          
            </div>
          
          </div> -->
         
       
       


<!--- fin du tableau de bord   --->






      <div class="modal fade" id="modal-lg">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Ajouter personnel</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">


                  <div class="row">

                      <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Matricule:</label>
                        <input type="text" v-model="formData.mat_personnel" class="form-control" placeholder="entrer le matricule">
                      </div>
                    </div>



                   <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Fonction:</label>
                        <select  v-model="formData.fonction_id" class="form-control">
                            <option v-for="fonct in gettersFonction" :key="fonct.id"
                              :value="fonct.id">{{fonct.libelle_fonction}} </option>

                        </select>
                    
                      </div>
                    </div>

                       <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Grade:</label>
                        <select  v-model="formData.grade_id" class="form-control">
                            <option v-for="grde in grades" :key="grde.id"
                              :value="grde.id">{{grde.libelle_grade}} </option>

                        </select>
                    
                      </div>
                    </div>
                    
                    <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Nom:</label>
                        <input type="text" v-model="formData.nom" class="form-control" placeholder="entrer le matricule">
                      </div>
                    </div>
                    
                  </div>

                  <div class="row">
                    
                   <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>prenom:</label>
                        <input type="text" v-model="formData.prenom" class="form-control" placeholder="Enter prenom">
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Date de naissance:</label>
                        <input type="date" v-model="formData.date_naiss" class="form-control" placeholder="">
                      </div>
                    </div>
                      
                      
                    <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Date d'embauche:</label>
                        <input type="date" v-model="formData.date_embauche" class="form-control" placeholder="">
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Genre:</label>
                        <select v-model="formData.gernre" class="form-control">
                            <option value="1">Masculin</option>
                            <option value="2">Feminin</option>
                        </select>
                        
                      </div>
                    </div>
                  </div>


                
            </div>
              <div class="modal-footer"> 
             <button 
               class="btn btn-primary"
               @click.prevent="ajouterModalFonctionLocal"
              href="#" >Save</button>
              <button data-dismiss="modal" class="btn " href="#">Fermer</button> </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->

    </section>
<!---fin form ajout personnel  -->



 <div class="modal fade" id="modifier">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Modifier personnel</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">


                  <div class="row">

                      <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Matricule:</label>
                        <input type="text" v-model="editPresonnel.mat_personnel" class="form-control" placeholder="entrer le matricule">
                      </div>
                    </div>



                   <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Fonction:</label>
                        <select  v-model="editPresonnel.fonction_id" class="form-control">
                            <option v-for="fonct in gettersFonction" :key="fonct.id"
                              :value="fonct.id">{{fonct.libelle_fonction}} </option>

                        </select>
                    
                      </div>
                    </div>

                       <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Grade:</label>
                        <select  v-model="editPresonnel.grade_id" class="form-control">
                            <option v-for="grde in grades" :key="grde.id"
                              :value="grde.id">{{grde.libelle_grade}} </option>

                        </select>
                    
                      </div>
                    </div>
                    
                    <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Nom:</label>
                        <input type="text" v-model="editPresonnel.nom" class="form-control" placeholder="entrer le matricule">
                      </div>
                    </div>
                    
                  </div>

                  <div class="row">
                    
                   <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>prenom:</label>
                        <input type="text" v-model="editPresonnel.prenom" class="form-control" placeholder="Enter prenom">
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Date de naissance:</label>
                        <input type="date" v-model="editPresonnel.date_naiss" class="form-control" placeholder="">
                      </div>
                    </div>
                      
                      
                    <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Date d'embauche:</label>
                        <input type="date" v-model="editPresonnel.date_embauche" class="form-control" placeholder="">
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Genre:</label>
                        <select v-model="editPresonnel.gernre" class="form-control">
                            <option value="1">Masculin</option>
                            <option value="2">Feminin</option>
                        </select>
                        
                      </div>
                    </div>
                  </div>


                
            </div>
              <div class="modal-footer"> 
             <button 
               class="btn btn-primary"
               @click.prevent="modifierPresonnel"
              href="#" >Save</button>
              <button data-dismiss="modal" class="btn " href="#">Fermer</button> </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>


<!--- debut du tableau  ----->

         <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title"></h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text"  v-model="search" name="table_search" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="submit"  class="btn btn-default"><i class="fas fa-search"></i></button>
                    </div>
                  </div>
                </div>
              </div>
             
           
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      
                      
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                     
                      <th>Fonction</th>
                      
                      <th>Matricule</th>
                      <th>Nom</th>
                      <th>Prenom</th>
                      <th>Genre</th>
                      <th>Date de naissance</th>
                      <th>Date embauche</th>
                      
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr class="odd gradeX" v-for="(person, index) in personnelFiltre"
                  :key="person.id">

                   
                  
                     <td >
                    </td>
                     <td >
                    </td>
                    <td >
                    </td>
                    <td >
                    </td>
                     <td >
                    </td>
                      <td >
                    </td>
                    <td >
                    </td>
                     <td></td>
                    <td @dblclick="afficherModalModifierPersonnel(index)">
                    {{person.relation_fonction.libelle_fonction || 'Non renseigné'}}</td>
                    <!-- <td @dblclick="afficherModalModifierPersonnel(index)">
                      {{person.relation_grade.libelle_grade || 'Non renseigné'}}</td> -->

                <td @dblclick="afficherModalModifierPersonnel(index)">
                    {{person.mat_personnel || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierPersonnel(index)">
                      {{person.nom || 'Non renseigné'}}</td>

                  <td @dblclick="afficherModalModifierPersonnel(index)">
                    {{person.prenom || 'Non renseigné'}}</td>

                    <td>
                        <span v-if="person.gernre == 1"> Masculin</span>
                        <span v-else>Feminin</span>
                    </td>

                    <td @dblclick="afficherModalModifierPersonnel(index)">
                      {{formaterDate(person.date_naiss) || 'Non renseigné'}}</td>

                    <td @dblclick="afficherModalModifierPersonnel(index)">
                      {{formaterDate(person.date_embauche) || 'Non renseigné'}}</td>

                      
                               <td>
              <div class="btn-group">
              <button @click.prevent="supprimerGettersPersonnel(person.id)"  class="btn btn-danger ">
               <i class="far fa-trash-alt"></i></button>
             
            </div>

                  </td>
                  </tr>
                  </tbody>
                </table>
              </div>
          
            </div>
           
          </div>
        </div>

<!-- fin du tableau  --->




        <!-- <button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterAgent()">Open</button> -->
  
<!-- <div align ="bottom">
 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterAgent"
        bg-color="blue"

  ></fab>
</div> -->

<!-- <notifications /> -->

<div class="card-body" align="right">
              
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modal-lg" title="">
                  +
                </button>
               
              </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import moment from 'moment';
export default {

  data(){
    return {

      fabActions: [
              {
                  name: 'cache',
                  icon: 'add'
              },
              // {
              //     name: 'alertMe',
              //     icon: 'add_alert'
              // }
          ],

      formData:{

       fonction_id:"",
        grade_id:"",
        nom:"",
        prenom:"",
        date_naiss:"",
        gernre:"",
        mat_personnel:"",
        date_embauche:""
      },

      editPresonnel:{
        fonction_id:"",
        grade_id:"",
        nom:"",
        prenom:"",
        date_naiss:"",
        gernre:"",
        mat_personnel:"",
        date_embauche:""

      },
      search:"",
    }
  },
  created(){
    this.getGettersPresonnel()

  },

  computed:{


      

// methode pour trier item

personnelFiltre(){

  const ste = this.search.toLowerCase();
  return this.gettersPersonnels.filter((item)=>{
    return item.nom.toLowerCase().includes(ste) ||
           item.prenom.toLowerCase().includes(ste)
            
  })
},
     //...mapGetters('gestion_personnel'['gettersPersonnels']),
    ...mapGetters('parametres',["gettersFonction","gettersPersonnels", "grades",
    
    "NombreDePersonnel"])
   

  },

  methods:{

...mapActions('parametres',['ajouterGettresPresonnel', 
'modifierGettersPresonnel', 'supprimerGettersPersonnel','getGettersPresonnel']),

    // afficherModalAjouterAgent(){
    //    this.$('#exampleModal').modal({
    //           backdrop: 'static',
    //           keyboard: false
    //          });
    // },


    

    // vider l'input
    ajouterModalFonctionLocal(){
      this.ajouterGettresPresonnel(this.formData)
      this.formData = {
         fonction_id:"",
        grade_id:"",
        nom:"",
        prenom:"",
        date_naiss:"",
        gernre:"",
        mat_personnel:"",
        date_embauche:""
      }
    },


    //
    afficherModalModifierPersonnel(index){
      this.$('#modifierModal').modal({
        backdrop:'static',
        keyboard: false
      });
      this.editPresonnel = this.gettersPersonnels[index];

    },

    // 
    modificationModalLocal(){
  this.modifierGettersPresonnel(this.editPresonnel)
  this.$('#modifierModal').modal('hide');
    },
      // formatage date

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  }


  
  
    
}
</script>
<style scoped>

</style>
