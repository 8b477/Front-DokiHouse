import { Component } from '@angular/core';
import { Blog } from '../../../API/Models/blogModels/BlogModel';
import { DATABLOG } from '../../../mocks/fakeDataBlogs/DATABLOG';
import { CardBlogComponent } from './components/card-blog/card-blog.component';


@Component({
    selector    : 'app-blog',
    standalone  : true,
    templateUrl : './blog.component.html',
    styleUrl    : './blog.component.scss',
    imports     : [CardBlogComponent]
})
export class BlogComponent {

  fakeData : Blog[] = DATABLOG  
}

