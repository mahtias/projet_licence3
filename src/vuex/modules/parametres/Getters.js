export const agents = state => state. agents

export const comptes = state => state.comptes
export const grades = state => state.grades
export const gettersFonction = state => state.gettersFonction
export const gettersPersonnels = state => state.gettersPersonnels



// calculons le nombre de personnel de E/S

export const NombreDePersonnel = state => parseFloat(state.gettersPersonnels.length)