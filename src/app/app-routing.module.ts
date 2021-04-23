import { AboutComponent } from './about/about.component';
import { DriverComponent } from './driver/driver.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { UpdateComponent } from './customer/update/update.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: 'customer/:customerId', component: CustomerComponent, /** canActivate:[AuthGuard] **/
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'update', component: UpdateComponent }
    ]
  },
  { path: 'driver', component: DriverComponent },

  { path: 'oops', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'oops', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
