import { HttpBackend, HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { BonsaiGateway } from "../Interfaces/bonsai.getaway";
import { BonsaiData } from "../Models/blogModels/BonsaiData";
import { BonsaiAsCreated } from "../Models/bonsaiModels/bonsaiAsCreatedModel";
import { BonsaiModel } from "../Models/bonsaiModels/bonsaiCreateModel";

export class BonsaiRepository extends BonsaiGateway{

    //VARIABLES
    private baseUrl = environment.apiUrl

    // INJECTION
    private httpClient = inject(HttpClient)
    private handler = inject(HttpBackend)
    private httpClientback = new HttpClient(this.handler) // --> For call endpoint AllowAnonymous

    // PUBLIC METHODS
    override get(): Observable<BonsaiData[]> {
        return this.httpClientback.get<BonsaiData[]>(`${this.baseUrl}Bonsai/GetAllBonsaiAndPicture`);
    }

    override getById(): Observable<BonsaiData[]> {
        return this.httpClient.get<BonsaiData[]>(`${this.baseUrl}Bonsai/GetOwnBonsaiAndPicture`);
    }

    override post(bonsai : BonsaiModel): Observable<BonsaiAsCreated> {
        return this.httpClient.post<BonsaiAsCreated>(`${this.baseUrl}Bonsai`,bonsai);
    }

    override update(idBonsai : number, bonsaiToUpdate : BonsaiModel): Observable<any> {
        return this.httpClient.put(this.baseUrl + "Bonsai/" + idBonsai, bonsaiToUpdate);
    }

    override delete(idBonsai : number): Observable<any> {
        return this.httpClient.delete(this.baseUrl + 'Bonsai/' + idBonsai);
    }


}
