import { Bien } from './bien';
import { Collaborateur } from './collaborateur';
import { Libelle } from './libelle';
import { Societe } from './societe';

export class Vente {
      idvente	: number
      clerc	: Collaborateur;
      client : Societe;	
      contactclient	: Collaborateur;
      vendeur	: Societe;
      contactvendeur : Collaborateur;
      acquereur	: Societe;	
      contactacquereur : Collaborateur;
      confrere : Societe;
      contactconfrere : Collaborateur;
      statut : string;
      datesignature : Date | string;
      biens	: Bien[];
      commentairebiens : string;
      datarooms	: Libelle[];
      commentairedatarooms : string;
      createdby : string;
      creationdate : Date | string;
      modifiedby : string;
      modificationdate : Date | string;
  }