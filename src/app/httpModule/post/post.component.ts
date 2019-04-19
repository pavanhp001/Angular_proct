import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any[];
  post = {title: ''};
  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response.json();
    },
    error => {
      alert('An unexpected error accured.');
      console.log(error);
    });
  }

  createPost(input: HTMLInputElement) {
    console.log(input.value);
    this.post = {title: input.value};
    input.value  = '';
    this.service.createPost(input.value).subscribe(response => {
      console.log(response);
      this.post['id']= response.json().id;
      this.posts.splice(0, 0, this.post);
    },
    error => {
      alert('An unexpected error accured.');
      console.log(error);
    });
  }

  deletePost(input) {
    console.log(input);
    this.service.deletePost(300)
    .subscribe(response => {
      const index = this.posts.indexOf(input);
      console.log(this.posts.indexOf(input));
      this.posts.splice(index, 1);
      console.log(response.json());
    },
    (error: Response) => {
      if (error.status === 404) {
        alert('this post is already deleted');
      } else throw error
    });
  }
  updatePost(input) {
    console.log(input);
    input.title = 'Updated';
   // this.http.patch(API_URL + '/' + input.id, JSON.stringify({title: "updated"}))
    this.service.updatePost(input)
    .subscribe(response => {
      const index = this.posts.indexOf(input);
      const uValue = response.json().title;
      input.title = response.json().title;
      console.log( response.json());
      console.log( input.title);
      console.log( JSON.stringify(response.json().title));
     }
    // error => {
    //   alert('An unexpected error accured.');
    //   console.log(error);
    // }  We Can remove the code block becouse of Global error handler.
    );
 }

}
