<template>
    <div>


         <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title"></h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
              <hr>
                <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div>
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>ID</th>
                      <th>Nom</th>
                      <th>Prenom</th>
                      <th>Date de naissance</th>
                      <th>Genre</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr class="odd gradeX" v-for="(agent, index) in agentFiltre"
                  :key="agent.id">

                    <td >
                    </td>
                    <td >
                    </td>
                    <td >
                    </td>
                     <td></td>


                  <td @dblclick="afficherModalModifierAgent(index)">
                    {{agent.nom || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierAgent(index)">
                      {{agent.prenom || 'Non renseigné'}}</td>

                      <td @dblclick="afficherModalModifierAgent(index)">
                        {{formaterDate(agent.date_naissance) || 'Non renseigné'}}</td>
                        <td @dblclick="afficherModalModifierAgent(index)">
                          {{agent.genrs || 'Non renseigné'}}</td>
                  
                               <td>
              <div class="btn-group">
              <button @click.prevent="supprimerAgent(agent.id)"  class="btn btn-danger ">
               <i class="far fa-trash-alt"></i></button>
             
            </div>

                  </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>

<!---- debut de page d'ajout ----->


<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter agent</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Nom:</label>
              <div class="controls">
                <input type="text" v-model="formData.nom" class="span" placeholder="Saisir le niveau" />
              </div>
            </div>

              <div class="control-group">
              <label class="control-label">Prenom:</label>
              <div class="controls">
                <input type="text" v-model="formData.prenom" class="span" placeholder="Saisir le niveau" />
              </div>
            </div>

              <div class="control-group">
              <label class="control-label">Date naissance:</label>
              <div class="controls">
                <input type="text" v-model="formData.date_naissance" class="span" placeholder="Saisir le niveau" />
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">genre:</label>
              <div class="controls">
                <input type="text" v-model="formData.genrs"  class="span" placeholder="Saisir le libelle" />
              </div>
            </div>
             
          </form>              
          </div>
           <div class="modal-footer"> 
             <button 
               class="btn btn-primary"
               @click.prevent="ajouterModalAgentLocal"
              href="#" >Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!---  debut modal modifier --->


 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier agent</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Nom:</label>
              <div class="controls">
                <input type="number" v-model="editAgent.nom" class="span" placeholder="Saisir le niveau" />
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Prenom:</label>
              <div class="controls">
                <input type="text"  v-model="editAgent.prenom" class="span" placeholder="Saisir le libelle" />
              </div>
            </div>

             <div class="control-group">
              <label class="control-label">Date de naissance:</label>
              <div class="controls">
                <input type="text"  v-model="editAgent.date_naissance" class="span" placeholder="Saisir le libelle" />
              </div>
            </div>

             <div class="control-group">
              <label class="control-label">genre:</label>
              <div class="controls">
                <input type="text"  v-model="editAgent.genrs" class="span" placeholder="Saisir le libelle" />
              </div>
            </div>
             
          </form>              
          </div>
           <div class="modal-footer"> 
             <button 
               class="btn btn-primary"
               @click.prevent="modificationModalLocal" 
              href="#" >Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!---  fin modal modifier     -->

        <!-- <button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterAgent()">Open</button> -->
<div align ="bottom">
 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterAgent"
        bg-color="blue"

  ></fab>
</div>

<!-- <notifications /> -->
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import moment from 'moment';
export default {

  data(){
    return{

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

        nom:"",
        prenom:"",
        date_naissance:"",
        genrs:""
      },

      editAgent:{
        nom:"",
        prenom:"",
        date_naissance:"",
        genrs:""

      },
      search:"",
    }
  },
  created(){
    this.getAgent()

  },

  computed:{

// methode pour trier item

agentFiltre(){

  const ste = this.search.toLowerCase();
  return this.agents.filter((item)=>{
    return item.nom.toLowerCase().includes(ste) ||
            item.prenom.toLowerCase().includes(ste)
  })
},
    
    ...mapGetters('parametres',['agents'])

  },

  methods:{

...mapActions('parametres',['ajouterAgent', 'modifierAgent', 'supprimerAgent','getAgent']),

    afficherModalAjouterAgent(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },

    // vider l'input
    ajouterModalAgentLocal(){
      this.ajouterAgent(this.formData)
      this.formData = {
        nom:"",
        prenom:"",
        date_naissance:"",
        genrs:""

      }
    },


    //
    afficherModalModifierAgent(index){
      this.$('#modifierModal').modal({
        backdrop:'static',
        keyboard: false
      });
      this.editAgent = this.agents[index];

    },

    // 
    modificationModalLocal(){
  this.modifierAgent(this.editAgent)
  this.$('#modifierModal').modal('hide');
    },
      // formatage date

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  }


  
  
    
}
</script>
