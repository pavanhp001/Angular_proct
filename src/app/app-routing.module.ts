import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './DemoComp/demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactFormComponent } from './template/contact-form/contact-form.component';
import { FormReactiveComponent } from './reactive/form-reactive/form-reactive.component';
import { PostComponent } from './httpModule/post/post.component';
import { PaginationComponent } from './pagination/pagination.component';
import { AdminComponent } from './auth/admin';
import { AuthGuard } from './auth/_guards';
import { Role } from './auth/_models';
import { LoginComponent } from './auth/login';
import { HomeComponent } from './auth/home';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
// tslint:disable-next-line: max-line-length
    pathMatch: 'full' // Invalid configuration of route '{path: "", redirectTo: "basic"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix'
  }, {
    path: 'basic',
    component: DemoComponent
  }, { path: 'template',
    component: ContactFormComponent
  }, {
    path: 'reactive',
    component: FormReactiveComponent
  }, {
    path: 'httpModule',
    component: PostComponent
  }, {
    path: 'Pagination',
    component: PaginationComponent
  }, {
      path: 'admin',
      component: AdminComponent,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
  }, {
      path: 'login',
      component: LoginComponent
  }, {
    path: 'home',
    component: HomeComponent
}, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
