import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorHandlerComponent } from '../../../utils/form-error-handler/form-error-handler.component';
import { FooterComponent } from "../../../components/footer/footer.component";
import { LogService } from '../../../services/login/log.service';
import { UserLogin } from '../../../mocks/userModels/login/UserLogin';

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

  constructor(private formBuilder : FormBuilder, private httpLogService : LogService){ }


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
                        next : token => console.log('le token de validation : ' + token.token),
                        error : error => console.log(error),
                        complete: () => console.log('request log is finish')
                       })
  }


}
