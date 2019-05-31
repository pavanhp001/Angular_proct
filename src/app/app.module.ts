import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DemoComponent } from './DemoComp/demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummeryPipe } from './customPipes/summery.pipe';
import { ParentComponent } from './home/parent.component';
import { ChildComponent } from './home/child.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './template/contact-form/contact-form.component';
import { FormReactiveComponent } from './reactive/form-reactive/form-reactive.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed.directive';
import { UniqueAlterEgoValidatorDirective } from './shared/alter-ego.directive';
import { NavbarHeaderComponent } from './header/navbar-header/navbar-header.component';
import { FooterPageComponent } from './footer/footer-page/footer-page.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './httpModule/post/post.component';
import { PostService } from './httpModule/post.service';
import { AppErrorHandler } from './shared/app-error-handler';
import { PaginationComponent } from './pagination/pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './auth/login';
import { AdminComponent } from './auth/admin/admin.component';
import { ErrorInterceptor, JwtInterceptor, fakeBackendProvider } from './auth/_helpers';
import { HomeComponent } from './auth/home';


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
    NavbarHeaderComponent,
    FooterPageComponent,
    PageNotFoundComponent,
    PostComponent,
    PaginationComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
    PostService,
  {provide: ErrorHandler, useClass: AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
