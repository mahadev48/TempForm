import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { projection } from '@angular/core/src/render3';
import { PersonalInfoModule } from './personal-info/personal-info.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguageComponent } from './modals/language/language.component';
import { EducationComponent } from './modals/education/education.component';
import { ExperienceComponent } from './modals/experience/experience.component';
import { LicenseComponent } from './modals/license/license.component';
import { OrganizationComponent } from './modals/organization/organization.component';
import { VolunteerComponent } from './modals/volunteer/volunteer.component';
import { CourseComponent } from './modals/course/course.component';
import { EditinfoComponent } from './modals/editinfo/editinfo.component';
import { HonorsComponent } from './modals/honors/honors.component';
import { PatentComponent } from './modals/patent/patent.component';
import { ProjectComponent } from './modals/project/project.component';
import { PublicationComponent } from './modals/publication/publication.component';
import { ScoreComponent } from './modals/score/score.component';
import { SkillComponent } from './modals/skill/skill.component';
import{ InformationComponent} from './modals/information/information.component';
import{QuestionComponent} from './modals/question/question.component';




@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    EducationComponent,
    ExperienceComponent,
    LicenseComponent,
    OrganizationComponent,
    VolunteerComponent,
    CourseComponent,
    EditinfoComponent,
    HonorsComponent,
    PatentComponent,
    ProjectComponent,
    PublicationComponent,
    ScoreComponent,
    SkillComponent,
    InformationComponent,
    QuestionComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    PersonalInfoModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
