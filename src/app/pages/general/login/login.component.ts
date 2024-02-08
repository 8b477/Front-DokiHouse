import { AuthenticationService } from './../../../services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { LocalStorageService } from './../../../services/localStorage/local-storage.service';
import { FooterComponent } from "../../../components/footer/footer.component";
import { UserLogin } from '../../../mocks/models/user/login/UserLogin';
import { TokenDecryptedModel } from '../../../mocks/models/token/TokenDecryptedModel';
import { FormErrorHandlerComponent } from '../../../components/form-error-handler/form-error-handler.component';
import { TokenModel } from '../../../mocks/models/token/TokenModel';
import { NavigationComponent } from '../../../components/navigation/navigation.component';




@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [ReactiveFormsModule, FormErrorHandlerComponent, NavigationComponent , FooterComponent]
})
export class LoginComponent implements OnInit{

  loginForm! : FormGroup;
  userModel : UserLogin | undefined;
  tokenModel! : TokenDecryptedModel;
  token! : TokenModel;
 


  constructor(
    private formBuilder : FormBuilder,
    private authenticationService : AuthenticationService,
    private localStorageSerice : LocalStorageService
    ){ }


  ngOnInit(): void {

  // --> faire une fonction pour le formBuilder -> ad la function here
    this.loginForm = this.formBuilder.group
        ({ 
            'mail' : ['', [Validators.required, Validators.email]],
            'passwd' : ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]]
        });
  }


  submitLogForm() :void{
    const mail = this.loginForm.controls['mail'].value
    const passwd = this.loginForm.controls['passwd'].value
    this.userModel = new UserLogin(mail, passwd)

    if(this.userModel == undefined)
      {
        console.error('userModel is not defined')
      }

    this.authenticationService.login(this.userModel)
    this.authenticationService.updateValueSubjectUser(true)
  }




}
/*
  private setLocalStorage() : void{
    this.localStorageSerice.setContextToken(this.token.token, this.tokenModel.nameid.toString(), this.tokenModel.name,this.tokenModel.role);
}*/

