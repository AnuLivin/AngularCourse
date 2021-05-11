import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdddatasRoutingModule } from './adddatas-routing.module';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddlhComponent } from './addlh/addlh.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [AddcourseComponent, AddlhComponent],
  imports: [
    CommonModule,
    AdddatasRoutingModule,
    FormsModule
  ]
})
export class AdddatasModule { }
