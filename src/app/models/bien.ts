import { Adresse } from './adresse';

export class Bien {
    idbien: number;
    nom: string;
    portefeuille: string;
    adresse: Adresse;
    commentaire: string;

    constructor () {
        this.idbien = -1,
        this.nom = '',
        this.portefeuille = '';
        this.adresse = {
            idAdresse: -1,
            l2PointDeRemise: '',
            l3Construction: '',
            l4Numero:	'',
            l4Voie:	'',
            l4NomVoie: '',
            l5Distribution:	'',
            l6CodePostal: '',
            l6Localite:	'',
            l7Pays: ''
        },
        this.commentaire = '';
    }
}
