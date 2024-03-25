import { BonsaiPicture } from "./BonsaiPicture";


export interface BonsaiData {
    idBonsai: number;
    idUser: number;
    bonsaiName: string;
    bonsaiDescription: string;
    createAt: string;
    modifiedAt: string;
    bonsaiPicture: BonsaiPicture[];
}