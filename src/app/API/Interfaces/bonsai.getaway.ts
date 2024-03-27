import { Observable } from "rxjs";

export abstract class BonsaiGateway{

    abstract getAll() : Observable<any>;
    abstract getAllBonsaiUser() : Observable<any>;

}