import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { noAuthGuard } from './guards/noauth.guard';

const routes: Routes = [  
  { path: 'login-fain', component: LoginComponent, canActivate:[noAuthGuard]},
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard]},
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
