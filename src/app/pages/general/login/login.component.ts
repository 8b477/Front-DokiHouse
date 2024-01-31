import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorHandlerComponent } from '../../../utils/form-error-handler/form-error-handler.component';
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [ReactiveFormsModule, FormErrorHandlerComponent, FooterComponent]
})
export class LoginComponent implements OnInit{

  loginForm! : FormGroup;

  constructor(private formBuilder : FormBuilder){ }


  ngOnInit(): void {
      this.loginForm = this.formBuilder.group
          ({ 
              'mail' : ['', [Validators.required, Validators.email]],
              'passwd' : ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]]
          });
  }


  submitLogForm() :void{
    console.log('mail : ' + this.loginForm.controls['mail'].value);
    console.log('pass : ' + this.loginForm.controls['passwd'].value);
  }

}
