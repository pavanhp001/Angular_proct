import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(API_URL);
  }
  createPost(post) {
    return this.http.post(API_URL, JSON.stringify(post))
  }

  updatePost(input) {
    return this.http.put(API_URL + '/' + input.id, JSON.stringify(input));
  }

  deletePost(input) {
    return this.http.delete(API_URL + '/' + input);
  }
}
