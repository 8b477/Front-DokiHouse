import { TokenDecryptedModel } from "../../../core/models/tokenModels/TokenDecryptedModel";
import { TokenModel } from "../../../core/models/tokenModels/TokenModel";
import { UserLoginModel } from "../../../core/models/userModels/userLoginModel/UserLoginModel";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { FormErrorInfoComponent } from '../../../shared/components/form-error-info/form-error-info.component';
import { AuthenticationService } from "../../../shared/services/authentication-service/authentication.service";

import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [ReactiveFormsModule, FormErrorInfoComponent, FooterComponent, RouterLink]
})
export class LoginComponent implements OnInit{


  // PUBLIC VARIABLE
  loginForm!  : FormGroup
  responce    : boolean = false
  userModel   : UserLoginModel           | undefined
  tokenModel  : TokenDecryptedModel | undefined
  token       : TokenModel          | undefined


  // SERVICES
  formBuilder           : FormBuilder           = inject(FormBuilder)
  authenticationService : AuthenticationService = inject(AuthenticationService)
  router                : Router                = inject(Router)

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

    const email = this.loginForm.controls['mail'].value
    const passwd = this.loginForm.controls['passwd'].value

    this.userModel = { email : email, passwd : passwd}

this.authenticationService.connectedUserSubject.next(true);
this.router.navigateByUrl('/profil');

    if(this.userModel.email == undefined || this.userModel.passwd == undefined)
      {
        console.error('userModel is not defined')
      }

    this.authenticationService.login(this.userModel)
        .subscribe({ 
                    next : (value) => 
                    { 
                      this.responce = value 
                      if(value)
                        {
                          this.router.navigate(['/profil'])
                        }
                    },
                    error : (error) => { console.log(error) }
                  })
  }

}
