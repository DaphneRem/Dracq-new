export class Adresse {
    idAdresse: number;
    l2PointDeRemise: string;
    l3Construction: string;
    l4Numero: string;
    l4Voie: string;
    l4NomVoie: string;
    l5Distribution: string;
    l6CodePostal: string;
    l6Localite: string;
    l7Pays: string;

    constructor () {
        this.idAdresse = -1,
        this.l2PointDeRemise = '',
        this.l3Construction = '',
        this.l4Numero =	'',
        this.l4Voie = '',
        this.l4NomVoie = '',
        this.l5Distribution = '',
        this.l6CodePostal = '',
        this.l6Localite = '',
        this.l7Pays = '';
    }
}
