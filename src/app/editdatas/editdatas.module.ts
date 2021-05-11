import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditdatasRoutingModule } from './editdatas-routing.module';
import { EditlhComponent } from './editlh/editlh.component';
import { EditstdComponent } from './editstd/editstd.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [EditlhComponent, EditstdComponent, EditcourseComponent],
  imports: [
    CommonModule,
    EditdatasRoutingModule,
    FormsModule
  ]
})
export class EditdatasModule { }
