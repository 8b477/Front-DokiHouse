import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'

import { FooterComponent } from "../../../components/footer/footer.component";
import { log } from 'console';
import { RegisterUserComponent } from "../../../components/forms/register-user/register-user.component";


@Component({
    selector: 'app-sign-up',
    standalone: true,
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss',
    imports: [ReactiveFormsModule, FooterComponent, RegisterUserComponent]
})
export class SignUpComponent implements OnInit{

signUpForm! : FormGroup;


constructor(private formBuilder : FormBuilder) 
{

}

ngOnInit(): void {
    this.signUpForm = this.formBuilder.group
    ({ 
        'name' : ['', [Validators.required, Validators.minLength(3)]],
        'mail' : ['', [Validators.required, Validators.email]],
        'passwd' : ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]],
        'passwdConfirm': ['', [Validators.required]]
    });
}

submitForm() :void{
    console.log(this.signUpForm.value); 
}

}
