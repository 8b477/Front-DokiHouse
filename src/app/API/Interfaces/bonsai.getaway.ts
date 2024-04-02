import { Observable } from "rxjs";

export abstract class BonsaiGateway{

    abstract get()     : Observable<any>;
    abstract getById() : Observable<any>;
    abstract post()    : Observable<any>;
    abstract update()  : Observable<any>;
    abstract delete()  : Observable<any>;
}

// May be create a interface generic for de CRUD