import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';
// import { environment } from 'environments/environment';

// const API_URL = environment.URL;
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any[];

  constructor(private http: Http) {
    console.log('API_URL' + API_URL);
  }

  createPost(input: HTMLInputElement) {
    console.log(input.value);
    const post = {title: input.value};
    input.value  = '';
    this.http.post(API_URL, JSON.stringify(post)).subscribe(response => {
      console.log(response);
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
    });
  }

  deletePost(input) {
    console.log(input);
    this.http.delete(API_URL + '/' + input.id).subscribe(response => {
      console.log(response.json());
    });
  }
  updatePost(input) {
    console.log(input);
    this.http.patch(API_URL + '/' + input.id, JSON.stringify({isRead: true}))
    .subscribe(response => {
      console.log(response.json());
    });
 }

  ngOnInit() {
    this.http.get(API_URL).subscribe(response => {
      this.posts = response.json();
    });
  }

}
