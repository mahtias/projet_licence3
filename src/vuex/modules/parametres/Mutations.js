

// mutation pour l'agent
export const GET_ALL_AGENT =(state, tableau_agent) =>{
    state.agents = tableau_agent
}

// mutation d'ajout de l'agent

export const AJOUTER_AGENT = (state, elementAjout) =>{
    state.agents.unshift(elementAjout)
}
// mutation de modification de l'agent

export const MODIFIFIER_AGENT = (state, elementModif) =>{
    state.agents = state.agents.map(response =>{
        if(response.id == elementModif.id ){
            response = {...elementModif}
        }
        return response
    })
}


// mutation de suppression de l'agent

export const SUPPRIMER_AGENT = (state, id) =>{
    state.agents = state.agents.filter(agt => agt.id !=id)
}



// mutation pour grade
export const GET_ALL_GRADE =(state, tableau_grade) =>{
    state.grades = tableau_grade
}

// mutation d'ajout de grade

export const AJOUTER_GRADE = (state, elementAjout) =>{
    state.grades.unshift(elementAjout)
}
// mutation de modification grade

export const MODIFIER_GRADE = (state, elementModif) =>{
    state.grades = state.grades.map(response =>{
        if(response.id == elementModif.id ){
            response = {...elementModif}
        }
        return response
    })
}

// mutation de suppression grade

export const SUPPRIMER_GRADE = (state, id) =>{
    state.grades = state.grades.filter(agt => agt.id !=id)
}

// mutation de fpnction 



export const GET_ALL_FONCTION = (state, tableau_getters_fonction) => {
    state.gettersFonction = tableau_getters_fonction
}

export const AJOUTER_GETTERS_FONCTION = (state, ajoutObjet) => {
    state.gettersFonction.unshift(ajoutObjet)
}

export const MODIFIER_GETTERS_FONCTION = (state, objetModifie) => {

    state.gettersFonction = state.gettersFonction.map(gettesF => {
        if(gettesF.id == objetModifie.id){
            gettesF = {...objetModifie}
        }
        return gettesF
    })
}

export const SUPPRIMER_GETTERS_FONCTION = (state , id) => {
    state.gettersFonction = state.gettersFonction.filter( gFt => gFt.id !=id)
}


// muation du personnel

export const GET_ALL_GETTERS_PERSONNEL = (state, tableau_getters_personnel) => {
    state.gettersPersonnels = tableau_getters_personnel
}

export const AJOUTER_GETTERS_PERSONNEL = (state, objetAjout) =>{
    state.gettersPersonnels.unshift(objetAjout)
}

export const UPDATE_GETTERS_PERSONNEL = (state, objetModifie) => {
    state.gettersPersonnels = state.gettersPersonnels.map(person => {
        if(person.id == objetModifie.id){
            person = {...objetModifie}
        }
        return person
    })
}

const SUPPRIMER_GETTERS_PERSONNEL = (state, id) =>{
    state.gettersPersonnels = state.gettersPersonnels.filter(person => person.id !=id)
}


export  {

    SUPPRIMER_GETTERS_PERSONNEL  
}