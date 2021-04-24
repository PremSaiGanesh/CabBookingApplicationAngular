import { AllDriversUpdateComponent } from './admin/all-drivers-update/all-drivers-update.component';
import { AllDriversSearchComponent } from './admin/all-drivers-search/all-drivers-search.component';
import { AllCustomerUpdateComponent } from './admin/all-customer-update/all-customer-update.component';
import { AllCustomersSearchComponent } from './admin/all-customers-search/all-customers-search.component';
import { AllAdminsUpdateComponent } from './admin/all-admins-update/all-admins-update.component';
import { AllAdminsSearchComponent } from './admin/all-admins-search/all-admins-search.component';
import { AdminUpdateComponent } from './admin/admin-update/admin-update.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminLogInComponent } from './login/admin-log-in/admin-log-in.component';
import { DriverLogInComponent } from './login/driver-log-in/driver-log-in.component';
import { CustomerLogInComponent } from './login/customer-log-in/customer-log-in.component';
import { DriverSignUpComponent } from './signup/driver-sign-up/driver-sign-up.component';
import { CustomerSignUpComponent } from './signup/customer-sign-up/customer-sign-up.component';
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
  {
    path: 'login', component: LoginComponent,
    children: [
      { path: 'customer', component: CustomerLogInComponent },
      { path: 'driver', component: DriverLogInComponent },
      { path: 'admin', component: AdminLogInComponent }
    ]
  },
  {
    path: 'signup', component: SignupComponent,
    children: [
      { path: 'customer', component: CustomerSignUpComponent },
      { path: 'driver', component: DriverSignUpComponent }

    ]
  },
  {
    path: 'admin/:adminId', component: AdminComponent, /** canActivate:[AuthGuard] **/
    children: [
      { path: 'profile', component: AdminProfileComponent},
      { path: 'update', component: AdminUpdateComponent, /* outlet:'adminUpdateRoute' */ },
      { path: 'manageAdmins', component: AllAdminsSearchComponent/* , outlet:'manageAdminsRoute' */ },
      { path: 'updateAdmins/:adminId', component: AllAdminsUpdateComponent/* , outlet:'updateAdminsRoute' */ },
      { path: 'manageCustomers', component: AllCustomersSearchComponent /* ,outlet:'manageCustomersRoute' */ },
      { path: 'updateCustomers/:customerId', component: AllCustomerUpdateComponent/* ,outlet:'updateCustomersRoute'  */},
      { path: 'manageDrivers', component: AllDriversSearchComponent/* ,outlet:'manageDriversRoute'  */},
      { path: 'updateDrivers/:driverId', component: AllDriversUpdateComponent/* ,outlet:'updateDriversRoute' */ }
    ]
  },
  {
    path: 'customer/:customerId', component: CustomerComponent, /** canActivate:[AuthGuard] **/
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'update', component: UpdateComponent }
    ]
  },
  { path: 'driver', component: DriverComponent }, /** canActivate:[AuthGuard] **/

  { path: 'oops', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'oops', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
