import { Component } from '@angular/core';
import { NavigationComponent } from '../../../shared/components/navigation/navigation.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

}
