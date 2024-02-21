import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'

import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { FormErrorInfoComponent } from '../../../shared/components/form-error-info/form-error-info.component';
import { UserHttpService } from '../../../shared/services/user-service/user-http.service';
import { UserCreateModel } from '../../../core/models/userModels/userCreateModel/UserCreateModel';
import { checkFieldsMatchValidator } from '../../../shared/validators/checkFieldsMatch.validator';


@Component({  
    selector    : 'app-sign-up',
    standalone  : true,
    templateUrl : './sign-up.component.html',
    styleUrl    : './sign-up.component.scss',
    imports     : [ReactiveFormsModule, FooterComponent, FormErrorInfoComponent]
})
export class SignUpComponent implements OnInit{

    // PUBLIC VARIABLE
    user          : UserCreateModel | undefined
    signUpForm!   : FormGroup


    // SERVICES
    userHttpService : UserHttpService = inject(UserHttpService);
    formBuilder     : FormBuilder     = inject(FormBuilder)


    // STATE
    ngOnInit(): void {
        this.buildFormAndValidator()
    }


    // PRIVATE METHODS
    private buildFormAndValidator(){
        this.signUpForm = this.formBuilder.group
        ({ 
            'name'         : ['', [Validators.required, Validators.minLength(3)]],
            'mail'         : ['', [Validators.required, Validators.email]],
            'passwd'       : ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]],
            'passwdConfirm': ['', [Validators.required]]
        },
            {
                validator: checkFieldsMatchValidator('passwd', 'passwdConfirm')
            }
        );
    }


    // PUBLIC METHODS
    submitForm() :void{

        const name          = this.signUpForm.controls['name'].value
        const mail          = this.signUpForm.controls['mail'].value
        const passwd        = this.signUpForm.controls['passwd'].value
        const passwdConfirm = this.signUpForm.controls['passwdConfirm'].value

        this.user = 
        {
            name          : name,
            email         : mail,
            passwd        : passwd,
            passwdConfirm : passwdConfirm
        }

        if(this.signUpForm.valid)
        {
            this.userHttpService.createUser(this.user)
        }
    }

}
