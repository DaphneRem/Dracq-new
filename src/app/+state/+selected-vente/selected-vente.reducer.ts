import { SelectedVente } from './selected-vente.interface';
import { SelectedVenteAction } from './selected-vente.actions';
import { selectedVenteInitialState } from './selected-vente.init';

export function selectedVenteReducer(state: SelectedVente, action: SelectedVenteAction): SelectedVente {
  switch (action.type) {
    case 'ADD_SELECTED_VENTE': {
        console.log('add-selected-vente');
        console.log(state);
        console.log(action);
        state = {...action.payload};
        console.log(state);
        return state;
    }
    case 'CLEAR_SELECTED_VENTE': {
        console.log(state);
        console.log(action);
        return selectedVenteInitialState;
    }
    default: {
      return state;
    }
  }
}
