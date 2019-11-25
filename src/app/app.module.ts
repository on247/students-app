import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { WebLinkDirective } from './common/directives/web-link.directive';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomeComponent,
    NotFoundComponent,
    StudentDetailsComponent,
    WebLinkDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
