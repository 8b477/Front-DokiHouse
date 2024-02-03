import { Component } from '@angular/core';

@Component({
  selector: 'app-card-blog',
  standalone: true,
  imports: [],
  templateUrl: './card-blog.component.html',
  styleUrl: './card-blog.component.scss'
})
export class CardBlogComponent {

  cardTextTitle : string = ""
  cardTextBody : string = ""
  cardAuthorName : string = ""
  cardDatePublied : Date = new Date()

}
