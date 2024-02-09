import { AuthenticationService } from './../../../services/authentication/authentication.service';
import { FooterComponent } from "../../../components/footer/footer.component";
import { UserLogin } from '../../../mocks/models/user/login/UserLogin';
import { TokenDecryptedModel } from '../../../mocks/models/token/TokenDecryptedModel';
import { FormErrorHandlerComponent } from '../../../components/form-error-handler/form-error-handler.component';
import { TokenModel } from '../../../mocks/models/token/TokenModel';
import { NavigationComponent } from '../../../components/navigation/navigation.component';

import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [ReactiveFormsModule, FormErrorHandlerComponent, NavigationComponent , FooterComponent, RouterLink]
})
export class LoginComponent implements OnInit{

  // PUBLIC VARIABLE
  loginForm!  : FormGroup
  responce    : boolean = false
  userModel   : UserLogin           | undefined
  tokenModel  : TokenDecryptedModel | undefined
  token       : TokenModel          | undefined

  // SERVICES
  formBuilder           : FormBuilder           = inject(FormBuilder)
  authenticationService : AuthenticationService = inject(AuthenticationService)


  // STATE
  ngOnInit() : void {
    this.buildFormAndValidator()
  }


  // PRIVATE METHODS
  private buildFormAndValidator() : void {
    this.loginForm = this.formBuilder.group
    ({ 
        'mail' : ['', [Validators.required, Validators.email]],
        'passwd' : ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]]
    });
  }


 // PUBLIC METHODS
  submitLogForm() : void {
    const mail = this.loginForm.controls['mail'].value
    const passwd = this.loginForm.controls['passwd'].value
    this.userModel = new UserLogin(mail, passwd)

    if(this.userModel == undefined)
      {
        console.error('userModel is not defined')
      }

    this.authenticationService.login(this.userModel)
        .subscribe({ 
                    next : (value) => 
                    { 
                      this.responce = value 
                      this.authenticationService.updateValueSubjectUser(value)
                    },
                    error : (error) => { console.log(error) },
                    complete : () => console.log('AuthenticationService login method is finish')
                  })
  }

}
