import axios from '../../modules/parametres/api_parametre/api'
import { asyncLoading } from 'vuejs-loading-plugin'

var housecall= require('housecall')
var queue = housecall({concurrency: 2, cooldown: 1000})

// action pour obtenir les informations de l'agent


export  function  getAgent({commit}) {
    queue.push(() =>  axios.get('/liste_agent').then((response) => {
      commit('GET_ALL_AGENT', response.data)
      
  }).catch(error => console.log(error)))
  }



// action pour ajouter agent
export  function ajouterAgent({commit}, objetAjoute){
    asyncLoading( axios.post('/add_agent',objetAjoute )).then(res => {
         if(res.status == 201){
             commit('AJOUTER_AGENT', res.data)
 
             this.$app.$notify({
                 title: 'success ',
                 text: 'Enregistrement effectué avec success !',
                 type:"success"
               })
         
         }
     }).catch(error => console.log(error))
 }
 
 // action pour modifier l'agent
 export function modifierAgent({commit}, objetModifie){
    asyncLoading( axios.put('/update_agent/' + objetModifie.id)).then(response => {
         commit('MODIFIFIER_AGENT', response.data)
 
         this.$app.$notify({
             title: 'success ',
             text: 'Modification effectué avec success !',
             type:"success"
           })
     }).catch(error => console.log(error))
 
 }

 // action pour supprimer agent

 export function supprimerAgent({commit}, id){
  
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_AGENT', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimer_agent/' + id).then(() => dialog.close() )   
    })
}
