import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './DemoComp/demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummeryPipe } from './customPipes/summery.pipe';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './home/parent.component';
import { ChildComponent } from './home/child.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './template/contact-form/contact-form.component';
import { FormReactiveComponent } from './reactive/form-reactive/form-reactive.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed.directive';
import { UniqueAlterEgoValidatorDirective } from './shared/alter-ego.directive';
import { CreditCardValidator } from './shared/creditcardvalidator.directive';
import { ProfileEditorComponent } from './reactive/FormBuilder/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    SummeryPipe,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    FormDemoComponent,
    InputFormatDirective,
    ContactFormComponent,
    FormReactiveComponent, 
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective,
    ProfileEditorComponent
    //CreditCardValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
