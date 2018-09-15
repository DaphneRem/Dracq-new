import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const transactions = [
        {        
            id: 0,
            clerc: 'clerc1', 
            client: 'client1',
            sellerName: 'Daphne Remali', // nom du vendeur
            buyerName: 'Daphne Remali', // nom de l'acquéreur
            RepoName: 'dossier1', // nom du dossier/ Portefeuille
            address: '2 bis rue Duguay 95100 Argenteuil', // adresse du bien
            signatureDate: '10/12/2018',
            dataRoomCreator: 'ASSOCIE', // confrère ayant réalisé la data room
            typeDR: 'data room',
        },
        {        
            id: 1,
            clerc: 'clerc2', 
            client: 'client2',
            sellerName: 'Daphne Remali', // nom du vendeur
            buyerName: 'Daphne Remali', // nom de l'acquéreur
            RepoName: 'dossier2', // nom du dossier/ Portefeuille
            address: '2 bis rue Duguay 95100 Argenteuil', // adresse du bien
            signatureDate: '10/12/2018',
            dataRoomCreator: 'ASSOCIE', // confrère ayant réalisé la data room
            typeDR: 'data room',
        },
        {        
            id: 2,
            clerc: 'clerc2', 
            client: 'client2',
            sellerName: 'Daphne Remali', // nom du vendeur
            buyerName: 'Daphne Remali', // nom de l'acquéreur
            RepoName: 'dossier1', // nom du dossier/ Portefeuille
            address: '2 bis rue Duguay 95100 Argenteuil', // adresse du bien
            signatureDate: '10/12/2018',
            dataRoomCreator: 'ASSOCIE', // confrère ayant réalisé la data room
            typeDR: 'data room',
        },
        {        
            id: 3,
            clerc: 'clerc3', 
            client: 'client3',
            sellerName: 'Daphne Remali', // nom du vendeur
            buyerName: 'Daphne Remali', // nom de l'acquéreur
            RepoName: 'dossier1', // nom du dossier/ Portefeuille
            address: '2 bis rue Duguay 95100 Argenteuil', // adresse du bien
            signatureDate: '10/12/2018',
            dataRoomCreator: 'ASSOCIE', // confrère ayant réalisé la data room
            typeDR: 'data room',
        },
        {        
            id: 4,
            clerc: 'clerc4', 
            client: 'client4',
            sellerName: 'Daphne Remali', // nom du vendeur
            buyerName: 'Daphne Remali', // nom de l'acquéreur
            RepoName: 'dossier1', // nom du dossier/ Portefeuille
            address: '2 bis rue Duguay 95100 Argenteuil', // adresse du bien
            signatureDate: '10/12/2018',
            dataRoomCreator: 'ASSOCIE', // confrère ayant réalisé la data room
            typeDR: 'data room',
        },
        {        
            id: 5,
            clerc: 'clerc5', 
            client: 'client5',
            sellerName: 'Daphne Remali', // nom du vendeur
            buyerName: 'Daphne Remali', // nom de l'acquéreur
            RepoName: 'dossier1', // nom du dossier/ Portefeuille
            address: '2 bis rue Duguay 95100 Argenteuil', // adresse du bien
            signatureDate: '10/12/2018',
            dataRoomCreator: 'ASSOCIE', // confrère ayant réalisé la data room
            typeDR: 'data room',
        }
    ];
    return { 
        transactions
    };
  }
}