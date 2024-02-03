import { Component } from '@angular/core';
import { CardBlogComponent } from "../../../components/card-blog/card-blog.component";

@Component({
    selector: 'app-blog',
    standalone: true,
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss',
    imports: [CardBlogComponent]
})
export class BlogComponent {

}
