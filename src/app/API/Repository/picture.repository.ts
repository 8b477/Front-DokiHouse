import { Observable } from "rxjs";
import { Picture } from "../interfaces/picture.getaway";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";

export class PictureRepository extends Picture{

// INJECTION
    private httpClient : HttpClient = inject(HttpClient)

    override post(picture: File, idBonsai: number): Observable<any> {
    const formData = new FormData()
    formData.append('picture', picture)
    formData.append('idBonsai', idBonsai.toString())

    return this.httpClient.post<any>("https://localhost:7043/api/Picture/" + idBonsai, formData)
  }

}
