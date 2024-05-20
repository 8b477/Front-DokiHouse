import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';



@Component({
    selector: 'app-test',
    standalone: true,
    templateUrl: './test.component.html',
    styleUrl: './test.component.scss',
    imports: [ButtonModule]
})
export class TestComponent {



}
