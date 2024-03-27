import { Observable } from "rxjs";
import { BonsaiGateway } from "../interfaces/bonsai.getaway";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BonsaiData } from "../models/blogModels/BonsaiData";

export class BonsaiRepository extends BonsaiGateway{


    //VARIABLES
    baseUrl = environment.apiUrl


    // INJECTION
    httpClient = inject(HttpClient)


    // PUBLIC METHODS


    override getAll(): Observable<BonsaiData[]> {
        return this.httpClient.get<BonsaiData[]>(`${this.baseUrl}Bonsai/GetAllBonsaiAndPicture`);
    }

    override getAllBonsaiUser(): Observable<BonsaiData[]> {
        return this.httpClient.get<BonsaiData[]>(`${this.baseUrl}Bonsai/Owned`);
    }

}