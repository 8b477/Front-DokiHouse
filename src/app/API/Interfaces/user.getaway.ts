import { Observable } from "rxjs";
import { UserCreateModel } from "../models/userModels/userCreateModel/UserCreateModel";
import { UserUpdateName } from "../models/userModels/userUpdateModels/userUpdateName/UserUpdateName";
import { UserModel } from "../models/userModels/UserModel";
import { UpdatePasswd } from "../models/userModels/userUpdateModels/userUpdatePasswd/UserUpdatePasswd";
import { UserCheckMail } from "../models/userModels/userCheckMailModel/UserCheckMail";
import { UserUpdateMail } from "../models/userModels/userUpdateModels/userUpdateMail/UserUpdateMail";

export abstract class UserGateway{

//GET
    abstract getAll () : Observable<any>
    abstract getById() : Observable<any>

//POST
    abstract create      (model  : UserCreateModel) : Observable<UserModel>
    abstract checkPasswd (passwd : string         ) : Observable<boolean>
    abstract checkMail   (mail   : UserCheckMail  ) : Observable<boolean>

//PUT
    abstract updatePasswd (model : UpdatePasswd  ) : Observable<boolean>
    abstract updateName   (name  : UserUpdateName) : Observable<UserUpdateName>
    abstract updateEmail  (mail  : UserUpdateMail) : Observable<UserUpdateMail>

//DELETE
    abstract delete() : Observable<any>
   


}

