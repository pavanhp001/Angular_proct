import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

 // courses = [];
  viewMode = "other";
courses = [
   {id: 1, name: 'Course1'},
   {id: 2, name: 'Course2'},
   {id: 3, name: 'Course3'}
 ];

  subject = {
    'title': null
  };

  canSave = false;

  onAdd(){
    this.courses.push({id: 4, name: 'Course4'})
  }
  onRemove(course){
    let index=this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course){
    course.name = "Update"
  }

  constructor() { }

  ngOnInit() {
  }

}
