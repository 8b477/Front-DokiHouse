import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';


@Component({
  standalone : true,
  selector    : 'app-card-bonsai',
  templateUrl : './card-bonsai.component.html',
  styleUrls   : ['./card-bonsai.component.scss']
})
export class CardBonsaiComponent {

  @Input() cardBonsaiName        : string        = '';
  @Input() cardBonsaiDescription : string        = '';
  @Input() cardBonsaiModifiedAt  : string | null = null;
  @Input() cardBonsaiCreateAt    : Date   | undefined;

  imageToShow: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getImageFromService();
  }

  getImageFromService() {
    this.http.get('https://localhost:7043/api/Picture/api/images/bonsais/1002_STRING/ca8e809a-04db-46a0-a8a9-a27804de7468_bg-home3.png', { responseType: 'blob' })
            .subscribe({
                        next : (data) => { this.createImageFromBlob(data) },
                        error : (error) => { console.error(error) }
                      })
  }

private userName : string = 'jhon'
private userId : string = '1002'
private query : string = this.userId + '_' + this.userName.toUpperCase()

debugger(){
  console.log(this.query);
}



 private createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

}
