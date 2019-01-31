
export interface AddSelectedVente {
    type: 'ADD_SELECTED_VENTE';
    payload: {
        allId: number[];    
        modif: boolean;
        multiSelection: boolean;
    };
  }
  
  export interface ClearSelectedVente {
    type: 'CLEAR_SELECTED_VENTE';
    payload: {
        allId: number[];    
        modif: boolean;
        multiSelection: boolean;
    };
  }
  
  export type SelectedVenteAction = AddSelectedVente | ClearSelectedVente;