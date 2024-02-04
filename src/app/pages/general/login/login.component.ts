import { LocalStorageService } from './../../../services/localStorage/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { DecodeTokenService } from './../../../services/token/decode-token.service';
import { FooterComponent } from "../../../components/footer/footer.component";
import { LogService } from '../../../services/login/log.service';
import { UserLogin } from '../../../mocks/models/user/login/UserLogin';
import { TokenModel } from '../../../mocks/models/token/TokenModel';
import { FormErrorHandlerComponent } from '../../../components/form-error-handler/form-error-handler.component';


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
  tokenModel! : TokenModel;
  tokenPayload! : string;

  constructor(private formBuilder : FormBuilder, private httpLogService : LogService, private decodeTokenService : DecodeTokenService, private localStorageSerice : LocalStorageService){ }


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

    this.httpLogService.getToken(this.userModel)
                       .subscribe
                       ({
                        next : token =>
                        {                               
                          this.tokenPayload = token.token;            
                          this.tokenModel = this.decodeTokenService.decodeToken(token.token); 
                          this.setLocalStorage();
                        },
                        error : error => console.log(error),
                        complete: () => console.log('request log is finish')
                       })
  }


  private setLocalStorage() : void{
    this.localStorageSerice.setContextToken(this.tokenPayload, this.tokenModel.nameid.toString(), this.tokenModel.name,this.tokenModel.role);
  }


testPayload()
{
  let tokendata = this.localStorageSerice.getContextToken()

  console.log(tokendata);
}


}
