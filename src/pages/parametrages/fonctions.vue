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


      <div class="modal fade" id="modal-lg">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Ajouter fonction</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">


                  <div class="row">
                   <div class="col-sm-12">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Code:</label>
                        <input type="text" v-model="formData.code_fonction" class="form-control" placeholder="Enter ...">
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    
                   <div class="col-sm-12">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Libelle:</label>
                        <input type="text" v-model="formData.libelle_fonction" class="form-control" placeholder="Enter libelle">
                      </div>
                    </div>

                  </div>


                
            </div>
              <div class="modal-footer"> 
             <button 
               class="btn btn-primary"
               @click.prevent="ajouterMyFonctionLocal"
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
              <div align="center">
              <h4>Liste des fonctions</h4>
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
                     
                      <th>Code</th>
                      <th>Libelle</th>

                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr class="odd gradeX" v-for="(agent, index) in fonctionFiltre"
                  :key="agent.id">

                   
                      <td >
                    </td>
                      <td >
                    </td>
                    <td >
                    </td>
                    <td >
                    </td>
                     <td></td>


                  <td @dblclick="afficherModalModifierAgent(index)">
                    {{agent.code_fonction || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierAgent(index)">
                      {{agent.libelle_fonction || 'Non renseigné'}}</td>

                      
                               <td>
              <div class="btn-group">
              <button @click.prevent="supprimerGettersfonction(agent.id)"  class="btn btn-danger ">
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
        
        <div class="card-body" align="right">
              
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modal-lg" title="ajouter fonction">
                  +
                </button>
               
              </div>




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

       code_fonction:"",
        libelle_fonction:""
      },

      editGrade:{
        code_fonction:"",
        libelle_fonction:""

      },
      search:"",
    }
  },  
  created(){
    this.getGettersFonction()

  },

  computed:{

// methode pour trier item

fonctionFiltre(){

  const ste = this.search.toLowerCase();
  return this.gettersFonction.filter((item)=>{
    return item.libelle_fonction.toLowerCase().includes(ste) 
            
  })
},
    
    ...mapGetters('parametres',['gettersFonction'])

  },

  methods:{

...mapActions('parametres',['ajouterGettersFonction', 'modifiergettersFonction', 'supprimerGettersfonction','getGettersFonction']),

    // afficherModalAjouterAgent(){
    //    this.$('#exampleModal').modal({
    //           backdrop: 'static',
    //           keyboard: false
    //          });
    // },


    

    // vider l'input
    ajouterMyFonctionLocal(){
      this.ajouterGettersFonction(this.formData)
      this.formData = {
        code_fonction:"",
        libelle_fonction:""
      }
    },


    //
    afficherModalModifierAgent(index){
      this.$('#modifierModal').modal({
        backdrop:'static',
        keyboard: false
      });
      this.editGrade = this.gettersFonction[index];

    },

    // 
    modificationModalLocal(){
  this.modifiergettersFonction(this.editAgent)
  this.$('#modifierModal').modal('hide');
    },
      // formatage date

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  }


  
  
    
}
</script>
