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

  @Input() cardBlogPicture     : string = ""
  @Input() cardBlogTextTitle   : string = ""
  @Input() cardBlogTextBody    : string = ""
  @Input() cardBlogAuthorName  : string = ""
  @Input() cardBlogDatePublied : Date   = new Date()
}
