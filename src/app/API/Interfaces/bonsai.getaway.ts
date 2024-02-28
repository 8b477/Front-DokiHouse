import { Observable } from "rxjs";

export abstract class BonsaiGateway{

    abstract getAll() : Observable<any>;
    // abstract getMyAll() : Observable<any>;

}