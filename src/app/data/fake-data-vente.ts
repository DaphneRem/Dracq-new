
import { Vente } from '../models/vente';

export let venteData: Vente[] = [
    {
        idvente: 1,
        clerc: {
            idcollaborateur: 1,
            personne:	{
                idpersonne : 1,
                titre: 'maître',
                civilite:	'M.',
                nom: 'Ladurée',
                prenom: 'Vincent',
                initiales: 'VL',
                telfixe: '',
                telmobile: '',
                email: ''
            },
            idsociete: 1,
            service: '',
            poste: 'Notaire',
            telfixe: '',
            telmobile: '',
            email: ''
        },
        client : {
            idsociete	: 1,
            forme	: '',
            nom	: 'Client 1',
            telstandard	: '',
            faxstandard	: '',
            emailaccueil : '',
            codeprofessionnel	: '',
            adresse	: {
                idAdresse	: 1,
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
                idcollaborateur	: 1,
                personne :	{
                    idpersonne : 1,
                    titre	: '',
                    civilite :	'Mme',
                    nom	: 'Loup',
                    prenom : 'Carole',
                    initiales :	'CL',
                    telfixe	: '',
                    telmobile	: '',
                    email	: ''
                },
                idsociete	: 1,
                service	: '',
                poste	: '',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            }
        },
        contactclient	: {
            idcollaborateur	: 1,
            personne :	{
                idpersonne : 1,
                titre	: '',
                civilite :	'Mme',
                nom	: 'Borger',
                prenom : 'Malia',
                initiales :	'',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            },
            idsociete	: 1,
            service	: '',
            poste	: 'Avocate',
            telfixe	: '',
            telmobile	: '',
            email	: ''
        },
        vendeur	: {
            idsociete	: 1,
            forme	: '',
            nom	: 'Naolink',
            telstandard	: '',
            faxstandard	: '',
            emailaccueil : '',
            codeprofessionnel	: '',
            adresse	: {
                idAdresse	: 1,
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
                idcollaborateur	: 1,
                personne :	{
                    idpersonne : 1,
                    titre	: '',
                    civilite :	'M.',
                    nom	: 'Tow',
                    prenom : 'Hank',
                    initiales :	'',
                    telfixe	: '',
                    telmobile	: '',
                    email	: ''
                },
                idsociete	: 1,
                service	: '',
                poste	: '',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            }
        },
        contactvendeur : {
            idcollaborateur	: 1,
            personne :	{
                idpersonne : 1,
                titre	: '',
                civilite :	'',
                nom	: 'Peltier',
                prenom : 'Yves',
                initiales :	'YP',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            },
            idsociete	: 1,
            service	: '',
            poste	: '',
            telfixe	: '',
            telmobile	: '',
            email	: ''
        },
        acquereur: {
            idsociete	: 1,
            forme	: '',
            nom	: 'AfterData',
            telstandard	: '',
            faxstandard	: '',
            emailaccueil : '',
            codeprofessionnel	: '',
            adresse	: {
                idAdresse	: 1,
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
                idcollaborateur	: 1,
                personne :	{
                    idpersonne : 1,
                    titre	: '',
                    civilite :	'',
                    nom	: '',
                    prenom : '',
                    initiales :	'',
                    telfixe	: '',
                    telmobile	: '',
                    email	: ''
                },
                idsociete	: 1,
                service	: '',
                poste	: '',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            }
        },
        contactacquereur : {
            idcollaborateur	: 1,
            personne :	{
                idpersonne : 1,
                titre	: '',
                civilite :	'',
                nom	: 'Bouchet',
                prenom : 'Luc',
                initiales :	'LB',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            },
            idsociete	: 1,
            service	: '',
            poste	: '',
            telfixe	: '',
            telmobile	: '',
            email	: ''
        },
        confrere : {
            idsociete	: 1,
            forme	: '',
            nom	: 'CARRE NOTAIRES',
            telstandard	: '',
            faxstandard	: '',
            emailaccueil : '',
            codeprofessionnel	: '',
            adresse	: {
                idAdresse	: 1,
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
                idcollaborateur	: 1,
                personne :	{
                    idpersonne : 1,
                    titre	: '',
                    civilite :	'',
                    nom	: '',
                    prenom : '',
                    initiales :	'',
                    telfixe	: '',
                    telmobile	: '',
                    email	: ''
                },
                idsociete	: 1,
                service	: '',
                poste	: '',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            }
        },
        contactconfrere : {
            idcollaborateur	: 1,
            personne :	{
                idpersonne : 1,
                titre	: '',
                civilite :	'',
                nom	: 'Peron',
                prenom : 'Frédéric',
                initiales :	'FP',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            },
            idsociete	: 1,
            service	: '',
            poste	: '',
            telfixe	: '',
            telmobile	: '',
            email	: ''
        },
        statut: '',
        datesignature: new Date(2018, 0, 10),
        biens: [],
        commentairebiens: '',
        datarooms: [],
        commentairedatarooms: '',
        createdby: '',
        creationdate: new Date(),
        modifiedby: '',
        modificationdate: null
    },
    {
        idvente: 2,
        clerc: {
            idcollaborateur: 2,
            personne:	{
                idpersonne : 2,
                titre: 'maître',
                civilite:	'M.',
                nom: 'Ladurée',
                prenom: 'Vincent',
                initiales: 'VL',
                telfixe: '',
                telmobile: '',
                email: ''
            },
            idsociete: 2,
            service: '',
            poste: '',
            telfixe: '',
            telmobile: '',
            email: ''
        },
        client : {
            idsociete	: 2,
            forme	: '',
            nom	: 'Client 2',
            telstandard	: '',
            faxstandard	: '',
            emailaccueil : '',
            codeprofessionnel	: '',
            adresse	: {
                idAdresse	: 2,
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
                idcollaborateur	: 2,
                personne :	{
                    idpersonne : 2,
                    titre	: '',
                    civilite :	'',
                    nom	: '',
                    prenom : '',
                    initiales :	'',
                    telfixe	: '',
                    telmobile	: '',
                    email	: ''
                },
                idsociete	: 2,
                service	: '',
                poste	: '',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            }
        },
        contactclient	: {
            idcollaborateur	: 2,
            personne :	{
                idpersonne : 2,
                titre	: '',
                civilite :	'',
                nom	: '',
                prenom : '',
                initiales :	'',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            },
            idsociete	: 2,
            service	: '',
            poste	: '',
            telfixe	: '',
            telmobile	: '',
            email	: ''
        },
        vendeur	: {
            idsociete	: 2,
            forme	: '',
            nom	: 'SOSTech',
            telstandard	: '',
            faxstandard	: '',
            emailaccueil : '',
            codeprofessionnel	: '',
            adresse	: {
                idAdresse	: 2,
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
                idcollaborateur	: 2,
                personne :	{
                    idpersonne : 2,
                    titre	: '',
                    civilite :	'',
                    nom	: '',
                    prenom : '',
                    initiales :	'',
                    telfixe	: '',
                    telmobile	: '',
                    email	: ''
                },
                idsociete	: 2,
                service	: '',
                poste	: '',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            }
        },
        contactvendeur : {
            idcollaborateur	: 2,
            personne :	{
                idpersonne : 2,
                titre	: '',
                civilite :	'',
                nom	: 'Agudelo',
                prenom : 'Ricky',
                initiales :	'',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            },
            idsociete	: 2,
            service	: '',
            poste	: '',
            telfixe	: '',
            telmobile	: '',
            email	: ''
        },
        acquereur: {
            idsociete	: 2,
            forme	: '',
            nom	: 'Kalico',
            telstandard	: '',
            faxstandard	: '',
            emailaccueil : '',
            codeprofessionnel	: '',
            adresse	: {
                idAdresse	: 2,
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
                idcollaborateur	: 2,
                personne :	{
                    idpersonne : 2,
                    titre	: '',
                    civilite :	'',
                    nom	: '',
                    prenom : '',
                    initiales :	'',
                    telfixe	: '',
                    telmobile	: '',
                    email	: ''
                },
                idsociete	: 2,
                service	: '',
                poste	: '',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            }
        },
        contactacquereur : {
            idcollaborateur	: 2,
            personne :	{
                idpersonne : 2,
                titre	: '',
                civilite :	'',
                nom	: 'Cordier',
                prenom : 'Capucine',
                initiales :	'CC',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            },
            idsociete	: 2,
            service	: '',
            poste	: '',
            telfixe	: '',
            telmobile	: '',
            email	: ''
        },
        confrere : {
            idsociete	: 2,
            forme	: '',
            nom	: 'PARIS NOTAIRES SERVICES',
            telstandard	: '',
            faxstandard	: '',
            emailaccueil : '',
            codeprofessionnel	: '',
            adresse	: {
                idAdresse	: 2,
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
                idcollaborateur	: 2,
                personne :	{
                    idpersonne : 2,
                    titre	: '',
                    civilite :	'',
                    nom	: '',
                    prenom : '',
                    initiales :	'',
                    telfixe	: '',
                    telmobile	: '',
                    email	: ''
                },
                idsociete	: 2,
                service	: '',
                poste	: '',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            }
        },
        contactconfrere : {
            idcollaborateur	: 2,
            personne :	{
                idpersonne : 2,
                titre	: '',
                civilite :	'',
                nom	: 'Fleury',
                prenom : 'Tristan',
                initiales :	'TF',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            },
            idsociete	: 2,
            service	: '',
            poste	: '',
            telfixe	: '',
            telmobile	: '',
            email	: ''
        },
        statut: '',
        datesignature: new Date(2018, 3, 25),
        biens: [],
        commentairebiens: '',
        datarooms: [],
        commentairedatarooms: '',
        createdby: '',
        creationdate: new Date(),
        modifiedby: '',
        modificationdate: null
    },
    {
        idvente: 3,
        clerc: {
            idcollaborateur: 3,
            personne:	{
                idpersonne : 3,
                titre: 'maître',
                civilite:	'M.',
                nom: 'Ladurée',
                prenom: 'Vincent',
                initiales: 'VL',
                telfixe: '',
                telmobile: '',
                email: ''
            },
            idsociete: 3,
            service: '',
            poste: '',
            telfixe: '',
            telmobile: '',
            email: ''
        },
        client : {
            idsociete	: 3,
            forme	: '',
            nom	: 'Client 3',
            telstandard	: '',
            faxstandard	: '',
            emailaccueil : '',
            codeprofessionnel	: '',
            adresse	: {
                idAdresse	: 3,
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
                idcollaborateur	: 3,
                personne :	{
                    idpersonne : 3,
                    titre	: '',
                    civilite :	'',
                    nom	: '',
                    prenom : '',
                    initiales :	'',
                    telfixe	: '',
                    telmobile	: '',
                    email	: ''
                },
                idsociete	: 3,
                service	: '',
                poste	: '',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            }
        },
        contactclient	: {
            idcollaborateur	: 3,
            personne :	{
                idpersonne : 3,
                titre	: '',
                civilite :	'',
                nom	: '',
                prenom : '',
                initiales :	'',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            },
            idsociete	: 3,
            service	: '',
            poste	: '',
            telfixe	: '',
            telmobile	: '',
            email	: ''
        },
        vendeur	: {
            idsociete	: 3,
            forme	: '',
            nom	: 'MooveBy',
            telstandard	: '',
            faxstandard	: '',
            emailaccueil : '',
            codeprofessionnel	: '',
            adresse	: {
                idAdresse	: 3,
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
                idcollaborateur	: 3,
                personne :	{
                    idpersonne : 3,
                    titre	: '',
                    civilite :	'',
                    nom	: '',
                    prenom : '',
                    initiales :	'',
                    telfixe	: '',
                    telmobile	: '',
                    email	: ''
                },
                idsociete	: 3,
                service	: '',
                poste	: '',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            }
        },
        contactvendeur : {
            idcollaborateur	: 3,
            personne :	{
                idpersonne : 3,
                titre	: '',
                civilite :	'Mme',
                nom	: 'Maillard',
                prenom : 'Émilie',
                initiales :	'EM',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            },
            idsociete	: 3,
            service	: '',
            poste	: '',
            telfixe	: '',
            telmobile	: '',
            email	: ''
        },
        acquereur: {
            idsociete	: 3,
            forme	: '',
            nom	: 'Limber',
            telstandard	: '',
            faxstandard	: '',
            emailaccueil : '',
            codeprofessionnel	: '',
            adresse	: {
                idAdresse	: 3,
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
                idcollaborateur	: 3,
                personne :	{
                    idpersonne : 3,
                    titre	: '',
                    civilite :	'',
                    nom	: '',
                    prenom : '',
                    initiales :	'',
                    telfixe	: '',
                    telmobile	: '',
                    email	: ''
                },
                idsociete	: 3,
                service	: '',
                poste	: '',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            }
        },
        contactacquereur : {
            idcollaborateur	: 3,
            personne :	{
                idpersonne : 3,
                titre	: '',
                civilite :	'',
                nom	: 'Weiss',
                prenom : 'Isabelle',
                initiales :	'IW',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            },
            idsociete	: 3,
            service	: '',
            poste	: '',
            telfixe	: '',
            telmobile	: '',
            email	: ''
        },
        confrere : {
            idsociete	: 3,
            forme	: '',
            nom	: 'LGL NOTAIRES',
            telstandard	: '',
            faxstandard	: '',
            emailaccueil : '',
            codeprofessionnel	: '',
            adresse	: {
                idAdresse	: 3,
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
                idcollaborateur	: 3,
                personne :	{
                    idpersonne : 3,
                    titre	: '',
                    civilite :	'',
                    nom	: '',
                    prenom : '',
                    initiales :	'',
                    telfixe	: '',
                    telmobile	: '',
                    email	: ''
                },
                idsociete	: 3,
                service	: '',
                poste	: '',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            }
        },
        contactconfrere : {
            idcollaborateur	: 3,
            personne :	{
                idpersonne : 3,
                titre	: '',
                civilite :	'',
                nom	: 'Lemoine',
                prenom : 'Nicolas',
                initiales :	'NL',
                telfixe	: '',
                telmobile	: '',
                email	: ''
            },
            idsociete	: 3,
            service	: '',
            poste	: '',
            telfixe	: '',
            telmobile	: '',
            email	: ''
        },
        statut: '',
        datesignature: new Date(2018, 0, 29),
        biens: [],
        commentairebiens: '',
        datarooms: [],
        commentairedatarooms: '',
        createdby: '',
        creationdate: new Date(),
        modifiedby: '',
        modificationdate: null
    }

];

