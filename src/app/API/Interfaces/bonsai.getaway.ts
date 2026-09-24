import { Observable } from "rxjs";
import { BonsaiData } from "../Models/blogModels/BonsaiData";
import { BonsaiModel } from "../Models/bonsaiModels/bonsaiCreateModel";

export abstract class BonsaiGateway{

    abstract get() : Observable<BonsaiData[]>
    abstract getById() : Observable<BonsaiData[]>
    abstract update(idBonsai : number, bonsaiToUpdate : BonsaiModel) : Observable<any>
    abstract delete(idBonsai : number) : Observable<any>
    abstract post(bonsai : BonsaiModel) : Observable<BonsaiModel>
}

// May be create a interface generic for de CRUD