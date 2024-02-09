import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'

import { FooterComponent } from '../../../components/footer/footer.component';
import { userCreateModels } from '../../../mocks/models/user/create/userCreateModel';
import { UserHttpService } from '../../../services/user/user-http.service';
import { FormErrorHandlerComponent } from '../../../components/form-error-handler/form-error-handler.component';
import { NavigationComponent } from '../../../components/navigation/navigation.component';


@Component({  
    selector: 'app-sign-up',
    standalone: true,
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss',
    imports: [ReactiveFormsModule, FooterComponent, FormErrorHandlerComponent, NavigationComponent]
})
export class SignUpComponent implements OnInit{


    // PUBLIC VARIABLE
    user        : userCreateModels | undefined
    signUpForm! : FormGroup


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
            'name' : ['', [Validators.required, Validators.minLength(3)]],
            'mail' : ['', [Validators.required, Validators.email]],
            'passwd' : ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')]],
            'passwdConfirm': ['', [Validators.required]]
        });
    }


    // PUBLIC METHODS
    submitForm() :void{
        let name = this.signUpForm.controls['name'].value as string
        let mail = this.signUpForm.controls['mail'].value as string
        let passwd = this.signUpForm.controls['passwd'].value as string
        let passwdConfirm = this.signUpForm.controls['passwdConfirm'].value as string

        this.user = new userCreateModels(name,mail,passwd,passwdConfirm);

        this.userHttpService.CreateUser(this.user)
                            .subscribe
                            ({
                               next : user => console.log(JSON.stringify(user)),
                               error : error => console.log(error),
                               complete : () => console.log('Request HTTP Create User is finish')
                            })
    }

}
