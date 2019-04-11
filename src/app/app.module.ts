import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './DemoComp/demo/demo.component';
import { FormsModule } from '@angular/forms';
import { SummeryPipe } from './customPipes/summery.pipe';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './home/parent.component';
import { ChildComponent } from './home/child.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { InputFormatDirective } from './input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    SummeryPipe,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    FormDemoComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
