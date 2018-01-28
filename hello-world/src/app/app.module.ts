import { SummaryPipe } from './custom-pipes/summary.pipe';
import { TitleCasePipe } from './custom-pipes/title_case.pipe';
import { AuthorsService } from './authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { TitleCaseComponent } from './title-case/title-case.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    TitleCasePipe,
    TitleCaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
