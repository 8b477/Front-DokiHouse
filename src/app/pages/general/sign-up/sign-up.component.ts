import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'

import { FooterComponent } from './../footer/footer.component';
import { FormErrorHandlerComponent } from '../../../utils/form-error-handler/form-error-handler.component';
import { userCreateModels } from '../../../mocks/userModels/create/userCreateModel';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
    selector: 'app-sign-up',
    standalone: true,
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss',
    imports: [ReactiveFormsModule, FooterComponent, FormErrorHandlerComponent, HttpClientModule]
})
export class SignUpComponent implements OnInit{

    signUpForm! : FormGroup;
    user! : userCreateModels;


    constructor(private formBuilder : FormBuilder, private httpService : HttpClient) {}

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
        let name = this.signUpForm.controls['name'].value as string
        let mail = this.signUpForm.controls['mail'].value as string
        let passwd = this.signUpForm.controls['passwd'].value as string
        let passwdConfirm = this.signUpForm.controls['passwdConfirm'].value as string

        this.user = new userCreateModels(name,mail,passwd,passwdConfirm);

        this.httpService.post("https://localhost:7043/api/User", this.user)
        .subscribe(
            (response) => {
                console.log("Réponse de la requête POST :", response);
                name = "";
                mail = "";
                passwd = "";
                passwdConfirm = "";
            },
            (error) => {
                console.error("Erreur lors de la requête POST :", error);
            }           
        );
    }


}
