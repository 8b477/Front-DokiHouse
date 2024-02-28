import { Observable } from "rxjs";
import { UserCreateModel } from "../models/userModels/userCreateModel/UserCreateModel";

export abstract class UserGateway{
    abstract getAll()                        : Observable<any>;
    abstract getById()                       : Observable<any>;
    abstract create(model : UserCreateModel) : Observable<any>;
    abstract updateName()                    : Observable<any>;
    abstract updatePasswd()                  : Observable<any>;
    abstract updateEmail()                   : Observable<any>;
    abstract delete()                        : Observable<any>;
}