// libelle :{
//     code : -1,
//     libelle : ""
//   }
  
//   codepostal : {
//     idcodepostal :-1,
//     codepostal : "",
//     localite : "",
//   }
  
//   groupe	: {
//       idgroupe : -1,
//       nom	: "",
//       droit : -1,
//   end;
//   }
  
//   adresse : {
//       idadresse	: -1
//       l2pointderemise	: "",
//       l3construction : "",
//       l4numero :	"",
//       l4voie :	"",
//       l4nomvoie	: "",
//       l5distribution :	"",
//       l6codepostal : "",
//       l6localite :	"",
//       l7pays : ""
//   }
  
//   personne : {
//       idpersonne : -1
//       titre	: "",
//       civilite :	"",
//       nom	: "",
//       prenom : "",
//       initiales :	"",
//       telfixe	: "",
//       telmobile	: "",
//       email	: ""
//   }	
  
//   collaborateur : {
//        idcollaborateur	: -1
//       personne :	{
//           idpersonne : -1
//           titre	: "",
//           civilite :	"",
//           nom	: "",
//           prenom : "",
//           initiales :	"",
//           telfixe	: "",
//           telmobile	: "",
//           email	: ""
//   },
//       idsociete	: -1,
//       service	: "",
//       poste	: "",
//       telfixe	: "",
//       telmobile	: "",
//       email	: ""
//   }
  
//   utilisateur : {
//       idutilisateur : -1,
//       collaborateur	: {
//           idcollaborateur	: -1,
//           personne :	{
//               idpersonne : -1
//               titre	: "",
//               civilite :	"",
//               nom	: "",
//               prenom : "",
//               initiales :	"",
//               telfixe	: "",
//               telmobile	: "",
//               email	: ""
//           },
//           idsociete	: -1,
//           service	: "",
//           poste	: "",
//           telfixe	: "",
//           telmobile	: "",
//           email	: ""
//       },
//       login	: "",
//       password : "",
//       etat : true,
//       groupes	: array<groupe>
//   }
  
//   societe  : {
//       idsociete	: -1,
//       forme	: "",
//       nom	: "",
//       telstandard	: "",
//       faxstandard	: "",
//       emailaccueil : "",
//       codeprofessionnel	: "",
//       adresse	: {
//           idadresse	: -1
//           l2pointderemise	: "",
//           l3construction : "",
//           l4numero :	"",
//           l4voie :	"",
//           l4nomvoie	: "",
//           l5distribution :	"",
//           l6codepostal : "",
//           l6localite :	"",
//           l7pays : ""
//       },
//       defaultcontact : {
//           idcollaborateur	: -1
//           personne :	{
//               idpersonne : -1
//               titre	: "",
//               civilite :	"",
//               nom	: "",
//               prenom : "",
//               initiales :	"",
//               telfixe	: "",
//               telmobile	: "",
//               email	: ""
//           },
//           idsociete	: -1,
//           service	: "",
//           poste	: "",
//           telfixe	: "",
//           telmobile	: "",
//           email	: ""
//       }
//   }
    
//   bien = {
//       idbien : -1,
//       nom	: "",
//       portefeuille : ",
//       adresse	: {
//           idadresse	: -1
//           l2pointderemise	: "",
//           l3construction : "",
//           l4numero :	"",
//           l4voie :	"",
//           l4nomvoie	: "",
//           l5distribution :	"",
//           l6codepostal : "",
//           l6localite :	"",
//           l7pays : ""
//       },
//       commentaire	: ""
//   }
      
//   vente : {
//       idvente	: -1,
//       clerc	: {
//           idcollaborateur	: -1,
//           personne :	{
//               idpersonne : -1
//               titre	: "",
//               civilite :	"",
//               nom	: "",
//               prenom : "",
//               initiales :	"",
//               telfixe	: "",
//               telmobile	: "",
//               email	: ""
//           },
//           idsociete	: -1,
//           service	: "",
//           poste	: "",
//           telfixe	: "",
//           telmobile	: "",
//           email	: ""
//       },
//       client : {
//           idsociete	: -1,
//           forme	: "",
//           nom	: "",
//           telstandard	: "",
//           faxstandard	: "",
//           emailaccueil : "",
//           codeprofessionnel	: "",
//           adresse	: {
//               idadresse	: -1
//               l2pointderemise	: "",
//               l3construction : "",
//               l4numero :	"",
//               l4voie :	"",
//               l4nomvoie	: "",
//               l5distribution :	"",
//               l6codepostal : "",
//               l6localite :	"",
//               l7pays : ""
//           },
//           defaultcontact : {
//               idcollaborateur	: -1
//               personne :	{
//                   idpersonne : -1
//                   titre	: "",
//                   civilite :	"",
//                   nom	: "",
//                   prenom : "",
//                   initiales :	"",
//                   telfixe	: "",
//                   telmobile	: "",
//                   email	: ""
//               },
//               idsociete	: -1,
//               service	: "",
//               poste	: "",
//               telfixe	: "",
//               telmobile	: "",
//               email	: ""
//           }
//       },	
//       contactclient	: {
//           idcollaborateur	: -1,
//           personne :	{
//               idpersonne : -1
//               titre	: "",
//               civilite :	"",
//               nom	: "",
//               prenom : "",
//               initiales :	"",
//               telfixe	: "",
//               telmobile	: "",
//               email	: ""
//           },
//           idsociete	: -1,
//           service	: "",
//           poste	: "",
//           telfixe	: "",
//           telmobile	: "",
//           email	: ""
//       },
//       vendeur	: {
//           idsociete	: -1,
//           forme	: "",
//           nom	: "",
//           telstandard	: "",
//           faxstandard	: "",
//           emailaccueil : "",
//           codeprofessionnel	: "",
//           adresse	: {
//               idadresse	: -1
//               l2pointderemise	: "",
//               l3construction : "",
//               l4numero :	"",
//               l4voie :	"",
//               l4nomvoie	: "",
//               l5distribution :	"",
//               l6codepostal : "",
//               l6localite :	"",
//               l7pays : ""
//           },
//           defaultcontact : {
//               idcollaborateur	: -1
//               personne :	{
//                   idpersonne : -1
//                   titre	: "",
//                   civilite :	"",
//                   nom	: "",
//                   prenom : "",
//                   initiales :	"",
//                   telfixe	: "",
//                   telmobile	: "",
//                   email	: ""
//               },
//               idsociete	: -1,
//               service	: "",
//               poste	: "",
//               telfixe	: "",
//               telmobile	: "",
//               email	: ""
//           }
//       },
//       contactvendeur : {
//           idcollaborateur	: -1,
//           personne :	{
//               idpersonne : -1
//               titre	: "",
//               civilite :	"",
//               nom	: "",
//               prenom : "",
//               initiales :	"",
//               telfixe	: "",
//               telmobile	: "",
//               email	: ""
//           },
//           idsociete	: -1,
//           service	: "",
//           poste	: "",
//           telfixe	: "",
//           telmobile	: "",
//           email	: ""
//       },
//       acquereur	: {
//           idsociete	: -1,
//           forme	: "",
//           nom	: "",
//           telstandard	: "",
//           faxstandard	: "",
//           emailaccueil : "",
//           codeprofessionnel	: "",
//           adresse	: {
//               idadresse	: -1
//               l2pointderemise	: "",
//               l3construction : "",
//               l4numero :	"",
//               l4voie :	"",
//               l4nomvoie	: "",
//               l5distribution :	"",
//               l6codepostal : "",
//               l6localite :	"",
//               l7pays : ""
//           },
//           defaultcontact : {
//               idcollaborateur	: -1
//               personne :	{
//                   idpersonne : -1
//                   titre	: "",
//                   civilite :	"",
//                   nom	: "",
//                   prenom : "",
//                   initiales :	"",
//                   telfixe	: "",
//                   telmobile	: "",
//                   email	: ""
//               },
//               idsociete	: -1,
//               service	: "",
//               poste	: "",
//               telfixe	: "",
//               telmobile	: "",
//               email	: ""
//           }
//       },	
//       contactacquereur : {
//           idcollaborateur	: -1,
//           personne :	{
//               idpersonne : -1
//               titre	: "",
//               civilite :	"",
//               nom	: "",
//               prenom : "",
//               initiales :	"",
//               telfixe	: "",
//               telmobile	: "",
//               email	: ""
//           },
//           idsociete	: -1,
//           service	: "",
//           poste	: "",
//           telfixe	: "",
//           telmobile	: "",
//           email	: ""
//       },
//       confrere : {
//           idsociete	: -1,
//           forme	: "",
//           nom	: "",
//           telstandard	: "",
//           faxstandard	: "",
//           emailaccueil : "",
//           codeprofessionnel	: "",
//           adresse	: {
//               idadresse	: -1
//               l2pointderemise	: "",
//               l3construction : "",
//               l4numero :	"",
//               l4voie :	"",
//               l4nomvoie	: "",
//               l5distribution :	"",
//               l6codepostal : "",
//               l6localite :	"",
//               l7pays : ""
//           },
//           defaultcontact : {
//               idcollaborateur	: -1
//               personne :	{
//                   idpersonne : -1
//                   titre	: "",
//                   civilite :	"",
//                   nom	: "",
//                   prenom : "",
//                   initiales :	"",
//                   telfixe	: "",
//                   telmobile	: "",
//                   email	: ""
//               },
//               idsociete	: -1,
//               service	: "",
//               poste	: "",
//               telfixe	: "",
//               telmobile	: "",
//               email	: ""
//           }
//       },
//       contactconfrere : {
//           idcollaborateur	: -1,
//           personne :	{
//               idpersonne : -1
//               titre	: "",
//               civilite :	"",
//               nom	: "",
//               prenom : "",
//               initiales :	"",
//               telfixe	: "",
//               telmobile	: "",
//               email	: ""
//           },
//           idsociete	: -1,
//           service	: "",
//           poste	: "",
//           telfixe	: "",
//           telmobile	: "",
//           email	: ""
//       },
//       statut : "",
//       datesignature : "31/12/2018",
//       biens	: array<bien>,
//       commentairebiens : "",
//       datarooms	: array<dataroom (une dataroom est un obket de type libelle)>,
//       commentairedatarooms : "",
//       createdby : "",
//       creationdate : "31/12/2018 01:02:03",
//       modifiedby : "",
//       modificationdate : "31/12/2018 01:02:03"
//   }