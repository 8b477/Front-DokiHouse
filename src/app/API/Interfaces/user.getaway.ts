import { Observable } from "rxjs";
import { UserCheckMail } from "../Models/userModels/userCheckMailModel/UserCheckMail";
import { UserCreateModel } from "../Models/userModels/userCreateModel/UserCreateModel";
import { UserModel } from "../Models/userModels/UserModel";
import { UserUpdateMail } from "../Models/userModels/userUpdateModels/userUpdateMail/UserUpdateMail";
import { UserUpdateName } from "../Models/userModels/userUpdateModels/userUpdateName/UserUpdateName";
import { UpdatePasswd } from "../Models/userModels/userUpdateModels/userUpdatePasswd/UserUpdatePasswd";

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

