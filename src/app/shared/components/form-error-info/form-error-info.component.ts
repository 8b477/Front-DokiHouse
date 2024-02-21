import { Component, Input } from '@angular/core';

@Component({
  selector    : 'app-form-error-info',
  standalone  : true,
  imports     : [],
  templateUrl : './form-error-info.component.html',
  styleUrl    : './form-error-info.component.scss'
})
export class FormErrorInfoComponent {
  @Input() tooltipText  : string = ''
  @Input() errorMessage : string = ''
}
