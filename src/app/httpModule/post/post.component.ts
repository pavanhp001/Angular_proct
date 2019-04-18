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
  post = {title: ''};

  

  constructor(private http: Http) {
    console.log('API_URL' + API_URL);
  }

  createPost(input: HTMLInputElement) {
    console.log(input.value);
    this.post = {title: input.value};
    input.value  = '';
    this.http.post(API_URL, JSON.stringify(this.post)).subscribe(response => {
      console.log(response);
      this.post['id'] = response.json().id;
      this.posts.splice(0, 0, this.post);
    });
  }

  deletePost(input) {
    console.log(input);
    this.http.delete(API_URL + '/' + input.id).subscribe(response => {
      let index = this.posts.indexOf(input);
      console.log(this.posts.indexOf(input));
      this.posts.splice(index, 1);
      console.log(response.json());
    });
  }
  updatePost(input) {
    console.log(input);
    input.title = "Updated";
   // this.http.patch(API_URL + '/' + input.id, JSON.stringify({title: "updated"}))
    this.http.put(API_URL + '/' + input.id, JSON.stringify(input))
    .subscribe(response => {
      let index = this.posts.indexOf(input);
      let uValue = response.json().title;
      input.title = response.json().title;
      console.log( response.json());
      console.log( input.title);
      console.log( JSON.stringify(response.json().title));
    }, error => {
      alert(error);
    });
 }

  ngOnInit() {
    this.http.get(API_URL).subscribe(response => {
      this.posts = response.json();
    });
  }

}
