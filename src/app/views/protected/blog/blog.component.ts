import { Component } from '@angular/core';

import { Blog } from '../../../core/models/blogModels/BlogModel';
import { CardBlogComponent } from './components/card-blog/card-blog.component';
import { DATABLOG } from '../../../mocks/fakeDataBlogs/DATABLOG';


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

