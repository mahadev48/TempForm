import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoRoutingModule } from './personal-info-routing.module';
import { AllInfoComponent } from './all-info/all-info.component';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { AddEducationComponent } from './add-education/add-education.component';
import { AddLicensesComponent } from './add-licenses/add-licenses.component';
import { AddVolunteerExperienceComponent } from './add-volunteer-experience/add-volunteer-experience.component';
import { AddOrganizationComponent } from './add-organization/add-organization.component';
import { SkillsComponent } from './skills/skills.component';
import { PublicationComponent } from './publication/publication.component';
import { ScoreComponent } from './score/score.component';
import { ProjectComponent } from './project/project.component';
import { PatentComponent } from './patent/patent.component';
import { CourseComponent } from './course/course.component';
import { HonorsComponent } from './honors/honors.component';
import { LanguageComponent } from './language/language.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { EditFormService } from './services/edit-form.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    PersonalInfoRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [AllInfoComponent],
  declarations: [
    AllInfoComponent,
    EditInfoComponent,
    AddExperienceComponent,
    AddEducationComponent,
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
    QuestionAnswerComponent
    
  ],
  providers: [EditFormService],
})
export class PersonalInfoModule { }
