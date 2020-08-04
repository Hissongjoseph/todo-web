import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate} from '@angular/fire/auth-guard';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {path: '', component: DashboardComponent, ...canActivate(redirectUnauthorizedToLogin)},
  {path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInToDashboard)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
