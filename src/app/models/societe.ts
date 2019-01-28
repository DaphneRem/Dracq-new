import { Adresse } from './adresse';
import { Collaborateur } from './collaborateur';

export class Societe {
  idsociete: number;
  forme: string;
  nom: string;
  telstandard: string;
  faxstandard: string;
  emailaccueil: string;
  codeprofessionnel: string;
  adresse: Adresse;
  defaultcontact: Collaborateur;
}
