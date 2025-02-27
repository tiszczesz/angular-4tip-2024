import { Component, input } from '@angular/core';
import { Post } from '../../Models/postsType';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  post = input<Post>();
}
