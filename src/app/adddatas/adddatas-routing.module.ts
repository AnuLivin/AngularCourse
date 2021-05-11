import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/Auth/auth.guard';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddlhComponent } from './addlh/addlh.component';

const routes: Routes = [
  {path:"addcourse",component:AddcourseComponent,canActivate:[AuthGuard]},
  {path:"addlh",component:AddlhComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdddatasRoutingModule { }
