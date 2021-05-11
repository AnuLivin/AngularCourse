import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditdatasModule } from './editdatas/editdatas.module';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { LighthouseComponent } from './lighthouse/lighthouse.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/Auth/auth.guard';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"lighthouse",component:LighthouseComponent,canActivate:[AuthGuard]},
  {path:"courses",component:CoursesComponent,canActivate:[AuthGuard]},
  {path:"enroll",component:EnrollmentComponent,canActivate:[AuthGuard]},
  {path:"editdatas",loadChildren:()=>import('./editdatas/editdatas.module').then (m=>m.EditdatasModule)},
  {path:"adddatas",loadChildren:()=>import('./adddatas/adddatas.module').then (m=>m.AdddatasModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
