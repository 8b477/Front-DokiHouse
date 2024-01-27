import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-error-handler',
  standalone: true,
  imports: [],
  templateUrl: './form-error-handler.component.html',
  styleUrl: './form-error-handler.component.scss'
})
export class FormErrorHandlerComponent {
  @Input() tooltipText : string = ''
  @Input() errorMessage : string = ''
}
