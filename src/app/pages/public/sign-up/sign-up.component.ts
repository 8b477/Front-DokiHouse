import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'

import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { UserHttpService } from '../../../services/user-service/user-http.service';
import { NavigationComponent } from '../../../shared/components/navigation/navigation.component';
import { FormErrorInfoComponent } from '../../../shared/components/form-error-info/form-error-info.component';
import { userCreateModels } from '../../../models/userModels/userCreateModel/userCreateModel';


@Component({  
    selector: 'app-sign-up',
    standalone: true,
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss',
    imports: [ReactiveFormsModule, FooterComponent, FormErrorInfoComponent, NavigationComponent]
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

    private isValidForm() : boolean
    {
        if(this.user?.name == undefined || this.user?.email == undefined || this.user?.passwd == undefined || this.user?.passwdConfirm == undefined)
        {
            console.error('One field or more are undefined')
            return false;
        }

        if(this.user?.name == "" || this.user?.email == "" || this.user?.passwd == "" || this.user?.passwdConfirm == "")
        {
            console.error('One field or more are empty')
            return false;
        }

        return true;
    }


    // PUBLIC METHODS
    submitForm() :void{
        const name = this.signUpForm.controls['name'].value
        const mail = this.signUpForm.controls['mail'].value
        const passwd = this.signUpForm.controls['passwd'].value
        const passwdConfirm = this.signUpForm.controls['passwdConfirm'].value

        this.user = {
            name : name,
            email : mail,
            passwd : passwd,
            passwdConfirm : passwdConfirm
        }

        if(this.isValidForm()){

            this.userHttpService.CreateUser(this.user)
                .subscribe
                ({
                    next : user => console.log(JSON.stringify(user)),
                    error : error => console.log(error),
                    complete : () => console.log('Request HTTP Create User is finish')
                })
        }

    }

}
