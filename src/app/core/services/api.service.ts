import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/data-types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
