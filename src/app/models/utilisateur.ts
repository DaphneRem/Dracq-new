import { Collaborateur } from './collaborateur';
import { Groupe } from './groupe';

export class Utilisateur {
      idutilisateur: number;
      collaborateur: Collaborateur;
      login: string;
      password: string;
      etat: boolean;
      groupes: Groupe[];
}
