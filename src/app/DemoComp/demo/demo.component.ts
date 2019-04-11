import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

   ngOnInit() {
   }

  title = "Well come to team";
  imageURL = "https://www.w3schools.com/w3images/lights.jpg";
  colspan = 2;
  isActive = false;
  isActiveClass = false;
  //emailData = "me@wipro.com";
  emailData = new Date(1988, 3, 15); 
  CustomPipetext = 'This text is Example for custom pipe';
  onSave($event){
    $event.stopPropagation();
    console.log("save1 button was clicked");
  }
  onDivClicked($event){
    console.log("save button was clicked like Event Bubling");
  }
  onKeyUp($event){
    console.log("onKeyUp event triggered");
  }
  onKeyUpemail(email){
    console.log("onKeyUpemail event triggered email "+email);
  }

}
