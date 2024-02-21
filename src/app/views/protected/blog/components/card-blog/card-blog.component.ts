import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector   : 'app-card-blog',
  standalone : true,
  imports    : [DatePipe],
  templateUrl: './card-blog.component.html',
  styleUrl   : './card-blog.component.scss'
})
export class CardBlogComponent {

  @Input() cardPicture     : string = ""
  @Input() cardTextTitle   : string = ""
  @Input() cardTextBody    : string = ""
  @Input() cardAuthorName  : string = ""
  @Input() cardDatePublied : Date   = new Date()

}
