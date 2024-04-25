import { Observable } from "rxjs"

export abstract class Picture{
//GET

//ADD
    abstract post(picture: File, idBonsai: number): Observable<any>
}