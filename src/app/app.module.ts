import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule}from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LighthouseComponent } from './lighthouse/lighthouse.component';
import { CoursesComponent } from './courses/courses.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {SidebarModule} from 'ng-sidebar';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LighthouseComponent,
    CoursesComponent,
    EnrollmentComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    SidebarModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
