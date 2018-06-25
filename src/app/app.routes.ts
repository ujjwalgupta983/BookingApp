import { NavbarComponent } from './components/navbar/navbar.component';
import { Component } from '@angular/core';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes ,RouterModule} from '@angular/router';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { FormComponent } from './form-component/form.component';
export const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent},
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'form-component',component:FormComponent},
{path:'dashlayout',component:AdminLayoutComponent},
 
{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full',
}, {
  path: '',
  component: AdminLayoutComponent,
  children: [
      {
    path: '',
    loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
}]},
  { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(rootRouterConfig);
 /*
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]}
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
<<<<<<< HEAD
export class AppRoutingModule { }*/
=======
export class AppRoutingModule { }
>>>>>>> 10b546d8302fa2b8a57af806ea1f6d811311de80
