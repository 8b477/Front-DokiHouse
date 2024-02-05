import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { LocalStorageService } from './../../../services/localStorage/local-storage.service';
import { DecodeTokenService } from './../../../services/token/decode-token.service';
import { FooterComponent } from "../../../components/footer/footer.component";
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { UserLogin } from '../../../mocks/models/user/login/UserLogin';
import { TokenDecryptedModel } from '../../../mocks/models/token/TokenDecryptedModel';
import { FormErrorHandlerComponent } from '../../../components/form-error-handler/form-error-handler.component';
import { TokenModel } from '../../../mocks/models/token/TokenModel';



@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [ReactiveFormsModule, FormErrorHandlerComponent, FooterComponent]
})
export class LoginComponent implements OnInit{

  loginForm! : FormGroup;
  userModel : UserLogin | undefined;
  tokenModel! : TokenDecryptedModel;
  token! : TokenModel;

  constructor(
    private formBuilder : FormBuilder,
    private authenticationService : AuthenticationService,
    private decodeTokenService : DecodeTokenService,
    private localStorageSerice : LocalStorageService
){ }


  ngOnInit(): void {
      this.loginForm = this.formBuilder.group
          ({ 
              'mail' : ['', [Validators.required, Validators.email]],
              'passwd' : ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]]
          });
  }


  submitLogForm() :void{
    const mail = this.loginForm.controls['mail'].value;
    const passwd = this.loginForm.controls['passwd'].value;

    this.userModel = new UserLogin(mail, passwd);

      this.authenticationService.login(this.userModel)
        .subscribe({
          next : (data) => {
           this.token = new TokenModel(data.payload) // if undefined throw error
           this.tokenModel = this.decodeTokenService.decodeToken(this.token)
           this.setLocalStorage();
           },
          error : (error) => console.log(error),
          complete : () => console.log('Task complete !')
        })
}


  private setLocalStorage() : void{
    this.localStorageSerice.setContextToken(this.token.payload, this.tokenModel.nameid.toString(), this.tokenModel.name,this.tokenModel.role);
}


/*__________ TEST AREA _________*/
testPayload()
{
  let tokendata = this.localStorageSerice.getContextToken()
  console.log(tokendata);
}

testClearStorage(){
  localStorage.clear()
}

testGetallDataLocalStorage(){
  let id = this.localStorageSerice.getContextTokenId()
  let name = this.localStorageSerice.getContextTokenName()
  let role = this.localStorageSerice.getContextTokenRole()
  let token = this.localStorageSerice.getContextToken()

  console.log(`id = ${id}, name = ${name}, role = ${role}, token = ${token} `);
}

}
