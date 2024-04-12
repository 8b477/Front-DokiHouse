import { Observable } from "rxjs";
import { BonsaiGateway } from "../interfaces/bonsai.getaway";
import { HttpBackend, HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BonsaiData } from "../models/blogModels/BonsaiData";
import { BonsaiModel } from "../models/bonsaiModels/bonsaiCreateModel";

export class BonsaiRepository extends BonsaiGateway{

    //VARIABLES
    baseUrl = environment.apiUrl

    // INJECTION
    httpClient = inject(HttpClient)
    handler = inject(HttpBackend)
    httpClientback = new HttpClient(this.handler) // --> For call endpoint AllowAnonymous

    // PUBLIC METHODS
    override get(): Observable<BonsaiData[]> {
        return this.httpClientback.get<BonsaiData[]>(`${this.baseUrl}Bonsai/GetAllBonsaiAndPicture`);
    }

    override getById(): Observable<BonsaiData[]> {
        return this.httpClient.get<BonsaiData[]>(`${this.baseUrl}Bonsai/GetOwnBonsaiAndPicture`);
    }

    override post(bonsai : BonsaiModel): Observable<BonsaiModel> {
        return this.httpClient.post<BonsaiModel>(`${this.baseUrl}Bonsai`,bonsai);
    }
    override update(): Observable<any> {
        throw new Error("Method not implemented.");
    }
    override delete(): Observable<any> {
        throw new Error("Method not implemented.");
    }


}
