import { Bien } from './bien';
import { Collaborateur } from './collaborateur';
import { Libelle } from './libelle';
import { Societe } from './societe';

export class Vente {
    idvente: number;
    clerc: Collaborateur;
    client: Societe;
    contactclient: Collaborateur;
    vendeur: Societe;
    contactvendeur: Collaborateur;
    acquereur: Societe;
    contactacquereur: Collaborateur;
    confrere: Societe;
    contactconfrere: Collaborateur;
    statut: string;
    datesignature: Date | string;
    biens: Bien[];
    commentairebiens: string;
    datarooms: Libelle[];
    commentairedatarooms: string;
    createdby: string;
    creationdate: Date | string;
    modifiedby: string;
    modificationdate: Date | string;
}

export class NewVente {
    idvente: number;
    clerc: Collaborateur;
    client: Societe;
    contactclient: Collaborateur;
    vendeur: Societe;
    contactvendeur: Collaborateur;
    acquereur: Societe;
    contactacquereur: Collaborateur;
    confrere: Societe;
    contactconfrere: Collaborateur;
    statut: string;
    datesignature: Date | string;
    biens: Bien[];
    commentairebiens: string;
    datarooms: Libelle[];
    commentairedatarooms: string;
    createdby: string;
    creationdate: Date | string;
    modifiedby: string;
    modificationdate: Date | string;
      constructor(
        // {
            // idvente: idvente,
            // clerc: clerc,
            // client : client,
            // contactclient	: contactclient,
            // vendeur	: vendeur,
            // contactvendeur : contactvendeur,
            // acquereur	: acquereur,
            // contactacquereur : contactacquereur,
            // confrere : confrere,
            // contactconfrere : contactconfrere,
            // statut : statut,
            // datesignature : datesignature,
            // biens	: biens,
            // commentairebiens : commentairebiens,
            // datarooms	: datarooms,
            // commentairedatarooms : commentairedatarooms,
            // createdby : createdby,
            // creationdate : creationdate,
            // modifiedby : modifiedby,
            // modificationdate : modificationdate
        // }
    ) {
        // Custom Values
        // this.clerc = clerc,
        // this.client = client,
        // this.contactclient = contactclient,
        // this.vendeur = vendeur,
        // this.contactvendeur = contactvendeur,
        // this.acquereur = acquereur,
        // this.contactacquereur = contactacquereur,
        // this.confrere = confrere,
        // this.contactconfrere = contactconfrere,
        // this.statut = statut,
        // this.datesignature = datesignature,
        // this.biens = biens,
        // this.datarooms = datarooms,
        // this.createdby = createdby,
        // this.creationdate = creationdate,
        // this.modifiedby = modifiedby,
        // this.modificationdate = modificationdate

        // Default Values
        // this.idvente = -1,
        // this.commentairebiens = '',
        // this.commentairedatarooms = '',
        this.idvente = -1,
        this.clerc	= {
            idcollaborateur	: -1,
            personne :	{
                idpersonne : -1,
                titre	: '',
                civilite :	'',
                nom	: '',
                prenom : '',
                initiales :	'',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            },
            idsociete	: -1,
            service	: '',
            poste	: '',
            telfixe	: '',
            telmobile	: '',
            email	: ''
        },
        this.client = {
            idsociete	: -1,
            forme	: '',
            nom	: '',
            telstandard	: '',
            faxstandard	: '',
            emailaccueil : '',
            codeprofessionnel	: '',
            adresse	: {
                idAdresse	: -1,
                l2PointDeRemise	: '',
                l3Construction : '',
                l4Numero :	'',
                l4Voie :	'',
                l4NomVoie	: '',
                l5Distribution :	'',
                l6CodePostal : '',
                l6Localite :	'',
                l7Pays : ''
            },
            defaultcontact : {
                idcollaborateur	: -1,
                personne :	{
                    idpersonne : -1,
                    titre	: '',
                    civilite :	'',
                    nom	: '',
                    prenom : '',
                    initiales :	'',
                    telfixe	: '',
                    telmobile	: '',
                    email	: ''
                },
                idsociete	: -1,
                service	: '',
                poste	: '',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            }
        },
        this.contactclient = {
            idcollaborateur	: -1,
            personne :	{
                idpersonne : -1,
                titre	: '',
                civilite :	'',
                nom	: '',
                prenom : '',
                initiales :	'',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            },
            idsociete	: -1,
            service	: '',
            poste	: '',
            telfixe	: '',
            telmobile	: '',
            email	: ''
        },
        this.vendeur = {
            idsociete	: -1,
            forme	: '',
            nom	: '',
            telstandard	: '',
            faxstandard	: '',
            emailaccueil : '',
            codeprofessionnel	: '',
            adresse	: {
                idAdresse	: -1,
                l2PointDeRemise	: '',
                l3Construction : '',
                l4Numero :	'',
                l4Voie :	'',
                l4NomVoie	: '',
                l5Distribution :	'',
                l6CodePostal : '',
                l6Localite :	'',
                l7Pays : ''
            },
            defaultcontact : {
                idcollaborateur	: -1,
                personne :	{
                    idpersonne : -1,
                    titre	: '',
                    civilite :	'',
                    nom	: '',
                    prenom : '',
                    initiales :	'',
                    telfixe	: '',
                    telmobile	: '',
                    email	: ''
                },
                idsociete	: -1,
                service	: '',
                poste	: '',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            }
        },
        this.contactvendeur = {
            idcollaborateur	: -1,
            personne :	{
                idpersonne : -1,
                titre	: '',
                civilite :	'',
                nom	: '',
                prenom : '',
                initiales :	'',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            },
            idsociete	: -1,
            service	: '',
            poste	: '',
            telfixe	: '',
            telmobile	: '',
            email	: ''
        },
        this.acquereur = {
            idsociete	: -1,
            forme	: '',
            nom	: '',
            telstandard	: '',
            faxstandard	: '',
            emailaccueil : '',
            codeprofessionnel	: '',
            adresse	: {
                idAdresse	: -1,
                l2PointDeRemise	: '',
                l3Construction : '',
                l4Numero :	'',
                l4Voie :	'',
                l4NomVoie	: '',
                l5Distribution :	'',
                l6CodePostal : '',
                l6Localite :	'',
                l7Pays : ''
            },
            defaultcontact : {
                idcollaborateur	: -1,
                personne :	{
                    idpersonne : -1,
                    titre	: '',
                    civilite :	'',
                    nom	: '',
                    prenom : '',
                    initiales :	'',
                    telfixe	: '',
                    telmobile	: '',
                    email	: ''
                },
                idsociete	: -1,
                service	: '',
                poste	: '',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            }
        },
        this.contactacquereur = {
            idcollaborateur	: -1,
            personne :	{
                idpersonne : -1,
                titre	: '',
                civilite :	'',
                nom	: '',
                prenom : '',
                initiales :	'',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            },
            idsociete	: -1,
            service	: '',
            poste	: '',
            telfixe	: '',
            telmobile	: '',
            email	: ''
        },
        this.confrere = {
            idsociete	: -1,
            forme	: '',
            nom	: '',
            telstandard	: '',
            faxstandard	: '',
            emailaccueil : '',
            codeprofessionnel	: '',
            adresse	: {
                idAdresse	: -1,
                l2PointDeRemise	: '',
                l3Construction : '',
                l4Numero :	'',
                l4Voie :	'',
                l4NomVoie	: '',
                l5Distribution :	'',
                l6CodePostal : '',
                l6Localite :	'',
                l7Pays : ''
            },
            defaultcontact : {
                idcollaborateur	: -1,
                personne :	{
                    idpersonne : -1,
                    titre	: '',
                    civilite :	'',
                    nom	: '',
                    prenom : '',
                    initiales :	'',
                    telfixe	: '',
                    telmobile	: '',
                    email	: ''
                },
                idsociete	: -1,
                service	: '',
                poste	: '',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            }
        },
        this.contactconfrere = {
            idcollaborateur	: -1,
            personne :	{
                idpersonne : -1,
                titre	: '',
                civilite :	'',
                nom	: '',
                prenom : '',
                initiales :	'',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            },
            idsociete	: -1,
            service	: '',
            poste	: '',
            telfixe	: '',
            telmobile	: '',
            email	: ''
        },
        this.statut = '',
        this.datesignature = null,
        this.biens	= [],
        this.commentairebiens = '',
        this.datarooms	= [],
        this.commentairedatarooms = '',
        this.createdby = '',
        this.creationdate = new Date(),
        this.modifiedby = '',
        this.modificationdate = null;
        }
}
