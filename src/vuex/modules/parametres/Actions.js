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




// action pour le grade


export  function  getGrade({commit}) {
    queue.push(() =>  axios.get('/liste_grade').then((response) => {
      commit('GET_ALL_GRADE', response.data)
      
  }).catch(error => console.log(error)))
  }



// action pour ajouter grade
export  function ajouterGrade({commit}, objetAjoute){
    asyncLoading( axios.post('/add_grade',objetAjoute )).then(res => {
         if(res.status == 201){
             commit('AJOUTER_GRADE', res.data)
 
             this.$app.$notify({
                 title: 'success ',
                 text: 'Enregistrement effectué avec success !',
                 type:"success"
               })
         
         }
     }).catch(error => console.log(error))
 }
 
 // action pour modifier l'agent
 export function modifierGrade({commit}, objetModifie){
    asyncLoading( axios.put('/update_grade/' + objetModifie.id)).then(response => {
         commit('MODIFIER_GRADE', response.data)
 
         this.$app.$notify({
             title: 'success ',
             text: 'Modification effectué avec success !',
             type:"success"
           })
     }).catch(error => console.log(error))
 
 }
 

 // action pour supprimer agent

 export function supprimerGrade({commit}, id){
  
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_GRADE', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimer_grade/' + id).then(() => dialog.close() )   
    })
}



// action pour getters fonction

export  function  getGettersFonction({commit}) {
    queue.push(() =>  axios.get('/liste_fonction').then((response) => {
      commit('GET_ALL_FONCTION', response.data)
      
  }).catch(error => console.log(error)))
  }



// action pour ajouter getters fonction
export  function ajouterGettersFonction({commit}, objetAjoute){
    asyncLoading( axios.post('/add_fonction',objetAjoute )).then(res => {
         if(res.status == 201){
             commit('AJOUTER_GETTERS_FONCTION', res.data)
 
             this.$app.$notify({
                 title: 'success ',
                 text: 'Enregistrement effectué avec success !',
                 type:"success"
               })
         
         }
     }).catch(error => console.log(error))
 }
 
 // action pour modifier getters fonction
 export function modifiergettersFonction({commit}, objetModifie){
    asyncLoading( axios.put('/update_fonction/' + objetModifie.id)).then(response => {
         commit('MODIFIER_GETTERS_FONCTION', response.data)
 
         this.$app.$notify({
             title: 'success ',
             text: 'Modification effectué avec success !',
             type:"success"
           })
     }).catch(error => console.log(error))
 
 }
 

 // action pour supprimer getters fonction

 export function supprimerGettersfonction({commit}, id){

    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_GETTERS_FONCTION', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimer_fonction/' + id).then(() => dialog.close() )   
    })
}




// action d'affichage du personnel 

export  function  getGettersPresonnel({commit}) {
    queue.push(() =>  axios.get('/liste_personnel').then((response) => {
      commit('GET_ALL_GETTERS_PERSONNEL', response.data)
      
  }).catch(error => console.log(error)))
  }



// action pour ajouter le personnel
export  function ajouterGettresPresonnel({commit,dispatch}, objetAjoute){
    asyncLoading( axios.post('/add_personnel',objetAjoute )).then(res => {
         if(res.status == 201){
             commit('AJOUTER_GETTERS_PERSONNEL', res.data)
             dispatch('getGettersPresonnel')
 
             this.$app.$notify({
                 title: 'success ',
                 text: 'Enregistrement effectué avec success !',
                 type:"success"
               })
         
         }
     }).catch(error => console.log(error))
 }
 
 // action pour modifier le personnel 
 export function modifierGettersPresonnel({commit}, objetModifie){
    asyncLoading( axios.put('/update_personnel/' + objetModifie.id)).then(response => {
         commit('UPDATE_GETTERS_PERSONNEL', response.data)
 
         this.$app.$notify({
             title: 'success ',
             text: 'Modification effectué avec success !',
             type:"success"
           })
     }).catch(error => console.log(error))
 
 }
 

 // action pour supprimer le personnel

 export function supprimerGettersPersonnel({commit}, id){

    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_GETTERS_PERSONNEL', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimer_personnel/' + id).then(() => dialog.close() )   
    })
}


