import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/Auth/auth.guard';
import { EditcourseComponent } from './editcourse/editcourse.component';
import { EditlhComponent } from './editlh/editlh.component';
import { EditstdComponent } from './editstd/editstd.component';

const routes: Routes = [
  {path:"editcourse/:id", component:EditcourseComponent,canActivate:[AuthGuard]},
  {path:"editlh/:id",component:EditlhComponent,canActivate:[AuthGuard]},
  {path:"editstd/:id",component:EditstdComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditdatasRoutingModule { }
