import { Component } from '@angular/core';
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
    selector: 'app-sign-up',
    standalone: true,
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss',
    imports: [FooterComponent]
})
export class SignUpComponent {

}
