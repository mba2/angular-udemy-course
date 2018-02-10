import { InputFormattingDirective } from './directives/input-formatting.directive';
import { SummaryPipe } from './custom-pipes/summary.pipe';
import { TitleCasePipe } from './custom-pipes/title_case.pipe';
import { AuthorsService } from './authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelBootstrapComponent } from './panel--bootstrap/panel--bootstrap.component';
import { LikeComponent } from './like/like.component';
import { IfDirectiveComponent } from './if-directive/if-directive.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { SafeTraversalComponent } from './safe-traversal/safe-traversal.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ModelGroupComponent } from './model-group/model-group.component';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';



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
    NgSwitchCaseComponent,
    NgClassComponent,
    SafeTraversalComponent,
    InputFormattingDirective,
    ZippyComponent,
    ContactFormComponent,
    ModelGroupComponent,
    MyReactiveFormComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
