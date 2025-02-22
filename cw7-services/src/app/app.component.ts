import { Component, inject, signal } from '@angular/core';
import { Post } from '../Models/postsType';
import { PostsServiceService } from './posts-service.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cw7-services';
  posts = signal<Post[]>([]);
  postsService = inject(PostsServiceService);

  async loadPostsToApp() {
    const posts = await this.postsService.loadPosts();
    this.posts.set(posts);
  }
  /**
   *
   */
  constructor() {
    this.loadPostsToApp().then((p)=>console.log(p));
      
  }
}
