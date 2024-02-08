import { Component } from '@angular/core';
import { NavigationComponent } from '../../../components/navigation/navigation.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
