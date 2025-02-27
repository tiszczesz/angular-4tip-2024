import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../Models/postsType';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostHttpClientService {
  http = inject(HttpClient);
  async loadPosts() {
    const posts = await this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    console.log(posts);

    return firstValueFrom(posts);
  }
  constructor() { }
}
