import { Injectable } from '@angular/core';
import { Post } from '../Models/postsType';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  async loadPosts():Promise<Post[]> {
    const response = await fetch(this.url);
    const posts:Post[] = await response.json();
    return posts;
  }
}
