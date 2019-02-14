import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllInfoComponent } from './personal-info/all-info/all-info.component';
import { ExperienceComponent } from './modals/experience/experience.component';
import { EducationComponent } from './modals/education/education.component';
import { LicenseComponent } from './modals/license/license.component';
import { VolunteerComponent } from './modals/volunteer/volunteer.component';
import { SkillComponent } from './modals/skill/skill.component';
import { PublicationComponent } from './modals/publication/publication.component';
import { PatentComponent } from './modals/patent/patent.component';
import { CourseComponent } from './modals/course/course.component';
import { ProjectComponent } from './modals/project/project.component';
import { HonorsComponent } from './modals/honors/honors.component';
import { ScoreComponent } from './modals/score/score.component';
import { LanguageComponent } from './modals/language/language.component';
import { OrganizationComponent } from './modals/organization/organization.component';
import { EditinfoComponent } from './modals/editinfo/editinfo.component';

const routes: Routes = [
	{
		path: "personal-info",
		component: AllInfoComponent
	},
	{
		path:"experience",
		component: ExperienceComponent
	},
	{
		path:"education",
		component: EducationComponent
	},
	{
		path:"license",
    component: LicenseComponent
},
{
	path:"volunteer",
	component: VolunteerComponent
},
{
	path:"skill",
	component: SkillComponent
},
{
	path:"publication",
  component: PublicationComponent
},
{
	path:"patent",
	component: PatentComponent
},
{
path:"course",
component: CourseComponent
},
{
	path:"project",
	component: ProjectComponent
},
{
	path:"honor",
	component: HonorsComponent
},
{
	path:"score",
	component: ScoreComponent
},
{
	path:"language",
	component: LanguageComponent
},
{
	path:"organization",
	component: OrganizationComponent
},
{
	path:"info",
	component: EditinfoComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
