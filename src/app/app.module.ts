import { EmailService } from './email.service';
import { CoursesService } from './courses/courses.service';
import { CoursesComponent } from './courses/courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
