import { Component } from '@angular/core';

import { DATABLOG } from '../../../core/mocks/fakeDataBlogs/DATABLOG';
import { Blog } from '../../../core/models/blogModels/BlogModel';
import { NavigationComponent } from '../../../shared/components/navigation/navigation.component';
import { CardBlogComponent } from './components/card-blog/card-blog.component';


@Component({
    selector: 'app-blog',
    standalone: true,
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss',
    imports: [NavigationComponent, CardBlogComponent]
})
export class BlogComponent {

  fakeData : Blog[] = DATABLOG
  
}

