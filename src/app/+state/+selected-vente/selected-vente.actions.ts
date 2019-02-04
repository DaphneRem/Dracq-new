
export interface AddSelectedVente {
    type: 'ADD_SELECTED_VENTE';
    payload: {
        allId: number[];
        previousId: number[];
        nextId: number[];
        modif: boolean;
        multiSelection: boolean;
    };
  }
  
  export interface ClearSelectedVente {
    type: 'CLEAR_SELECTED_VENTE';
    payload: {
        allId: number[];
        previousId: number[];
        nextId: number[];
        modif: boolean;
        multiSelection: boolean;
    };
  }
  
  export type SelectedVenteAction = AddSelectedVente | ClearSelectedVente;