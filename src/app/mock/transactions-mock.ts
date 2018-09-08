import { Transaction } from './../models/transaction-global';

export const TransactionsGlobal: Transaction[] = [
    {
        id: 0,
        clerc: 'clerc number 1',
        client: 'client1',
        sellerName: 'vendeur1', // nom du vendeur
        buyerName: 'acquéreur1', // nom de l'acquéreur
        RepoName: 'repo name 1', // nom du dossier/ Portefeuille
        address: 'adress 1', // adresse du bien
        signatureDate: 'Date',
        dataRoomCreator: 'collaborateur/créateur data room', // confrère ayant réalisé la data room
        typeDR: 'data room'
    },
    {
        id: 1,
        clerc: 'clerc number 2',
        client: 'client2',
        sellerName: 'vendeur2', 
        buyerName: 'acquéreur2',
        RepoName: 'repo name 2',
        address: 'adress 2',
        signatureDate: 'Date',
        dataRoomCreator: 'collaborateur/créateur data room',
        typeDR: 'data room'
    },
    {
        id: 2,
        clerc: 'clerc number 3',
        client: 'client3',
        sellerName: 'vendeur3', 
        buyerName: 'acquéreur3',
        RepoName: 'repo name 3',
        address: 'adress 3',
        signatureDate: 'Date',
        dataRoomCreator: 'collaborateur/créateur data room',
        typeDR: 'data room'
    },
]
