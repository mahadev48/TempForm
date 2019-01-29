import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { EditInfoComponent } from './my-form/edit-info/edit-info.component';
import { AddExperienceComponent } from './my-form/add-experience/add-experience.component';
import { AddEducationComponent } from './my-form/add-education/add-education.component';
*/
import { AddLicensesComponent } from './my-form/add-licenses/add-licenses.component';
import { AddVolunteerExperienceComponent } from './my-form/add-volunteer-experience/add-volunteer-experience.component';
import { AddOrganizationComponent } from './my-form/add-organization/add-organization.component';
import {SkillsComponent} from './my-form/skills/skills.component';
import {PublicationComponent} from './my-form/publication/publication.component';
import {ScoreComponent} from './my-form/score/score.component';
import {ProjectComponent} from './my-form/project/project.component';
import {PatentComponent} from './my-form/patent/patent.component';
import {CourseComponent} from './my-form/course/course.component';
import {HonorsComponent} from './my-form/honors/honors.component';
import {LanguageComponent} from './my-form/language/language.component';
import { projection } from '@angular/core/src/render3';
import { PersonalInfoModule } from './personal-info/personal-info.module';


@NgModule({
  declarations: [
    AppComponent,
    /*EditInfoComponent,
    AddExperienceComponent,
    AddEducationComponent,*/
    AddLicensesComponent,
    AddVolunteerExperienceComponent,
    AddOrganizationComponent,
    SkillsComponent,
    ScoreComponent,
    PublicationComponent,
    ProjectComponent,
    PatentComponent,
    CourseComponent,
    LanguageComponent,
    HonorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    PersonalInfoModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
