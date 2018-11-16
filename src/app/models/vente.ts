export class Vente {
    idVente: number
    clerc: string;
    client: string;
    contactClient: string;
    vendeur: string;
    contactVendeur: string;
    acquereur: string;
    contactAcquereur: string;
    confrere: string;
    contactconfrere: string;
    statut: string;
    dateSignature: number; // -1, ------> à vérifier
    biens: string;
    commentaireBiens: string;
    dataRooms: string;
    commentaireDataRooms: string;
    createdBy: string;
    creationDate: Date | string;
    modifiedBy: string;
    modificationDate: Date | string;
}