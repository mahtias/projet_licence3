

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