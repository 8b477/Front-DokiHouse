import { Observable } from "rxjs";
import { BonsaiModel } from "../models/bonsaiModels/bonsaiCreateModel";
import { BonsaiData } from "../models/blogModels/BonsaiData";

export abstract class BonsaiGateway{

    abstract get()     : Observable<BonsaiData[]>;
    abstract getById() : Observable<BonsaiData[]>;
    abstract update()  : Observable<any>;
    abstract delete()  : Observable<any>;
    abstract post(bonsai : BonsaiModel) : Observable<BonsaiModel>;
}

// May be create a interface generic for de CRUD