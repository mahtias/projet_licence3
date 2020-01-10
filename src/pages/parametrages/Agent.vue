<template>
    <div>

         <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Responsive Hover Table</h3>

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
                  <tr class="odd gradeX" v-for="(agent, index) in agents"
                  :key="agent.id">
                  <td @dblclick="afficherModalModifierAgent(index)">
                    {{agent.nom || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierAgent(index)">
                      {{agent.Prenom || 'Non renseigné'}}</td>

                      <td @dblclick="afficherModalModifierAgent(index)">
                        {{agent.date_naissance || 'Non renseigné'}}</td>
                        <td @dblclick="afficherModalModifierAgent(index)">
                          {{agent.genrs || 'Non renseigné'}}</td>
                  

                  </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>

<!-- 
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterAgent()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterAgent"
        bg-color="blue"

  ></fab>

<notifications /> -->
    </div>
</template>

<script>
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
      }
    }
  }
    
}
</script>
