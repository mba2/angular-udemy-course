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
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelBootstrapComponent } from './panel--bootstrap/panel--bootstrap.component';
import { LikeComponent } from './like/like.component';
import { IfDirectiveComponent } from './if-directive/if-directive.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    TitleCasePipe,
    TitleCaseComponent,
    FavoriteComponent,
    PanelBootstrapComponent,
    LikeComponent,
    IfDirectiveComponent,
    NgSwitchCaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
