import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const transactions = [
        {        
            id: 0,
            clerc: 'clerc1', 
            client: 'client1',
            sellerName: 'Vendeur1', // nom du vendeur
            buyerName: 'Acquéreur1', // nom de l'acquéreur
            RepoName: 'dossier1', // nom du dossier/ Portefeuille
            address: 'adresse du bien', // adresse du bien
            signatureDate: '10/12/2018',
            dataRoomCreator: 'confrère dataRoom', // confrère ayant réalisé la data room
            typeDR: 'data room',
        },
        {        
            id: 1,
            clerc: 'clerc2', 
            client: 'client2',
            sellerName: 'Vendeur2', // nom du vendeur
            buyerName: 'Acquéreur2', // nom de l'acquéreur
            RepoName: 'dossier2', // nom du dossier/ Portefeuille
            address: 'adresse du bien', // adresse du bien
            signatureDate: '10/12/2018',
            dataRoomCreator: 'confrère dataRoom', // confrère ayant réalisé la data room
            typeDR: 'data room',
        },
        {        
            id: 2,
            clerc: 'clerc3', 
            client: 'client3',
            sellerName: 'Vendeur3', // nom du vendeur
            buyerName: 'Acquéreur3', // nom de l'acquéreur
            RepoName: 'dossier3', // nom du dossier/ Portefeuille
            address: 'adresse du bien', // adresse du bien
            signatureDate: '10/12/2018',
            dataRoomCreator: 'confrère dataRoom', // confrère ayant réalisé la data room
            typeDR: 'data room',
        },
        {        
            id: 3,
            clerc: 'clerc4', 
            client: 'client4',
            sellerName: 'Vendeur4', // nom du vendeur
            buyerName: 'Acquéreur4', // nom de l'acquéreur
            RepoName: 'dossier4', // nom du dossier/ Portefeuille
            address: 'adresse du bien', // adresse du bien
            signatureDate: '10/12/2018',
            dataRoomCreator: 'confrère dataRoom', // confrère ayant réalisé la data room
            typeDR: 'data room',
        },
        {        
            id: 4,
            clerc: 'clerc5', 
            client: 'client5',
            sellerName: 'Vendeur5', // nom du vendeur
            buyerName: 'Acquéreur5', // nom de l'acquéreur
            RepoName: 'dossier5', // nom du dossier/ Portefeuille
            address: 'adresse du bien', // adresse du bien
            signatureDate: '10/12/2018',
            dataRoomCreator: 'confrère dataRoom', // confrère ayant réalisé la data room
            typeDR: 'data room',
        },
        {        
            id: 5,
            clerc: 'clerc6', 
            client: 'client6',
            sellerName: 'Vendeur6', // nom du vendeur
            buyerName: 'Acquéreur6', // nom de l'acquéreur
            RepoName: 'dossier6', // nom du dossier/ Portefeuille
            address: 'adresse du bien', // adresse du bien
            signatureDate: '10/12/2018',
            dataRoomCreator: 'confrère dataRoom', // confrère ayant réalisé la data room
            typeDR: 'data room',
        }
    ];
    return { 
        transactions
    };
  }
}