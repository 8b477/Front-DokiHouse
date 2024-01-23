import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss'
})
export class RegisterUserComponent {
  @Input() tooltipText : string = ''
  @Input() errorMessage : string = ''
}
