import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { EditInfoComponent } from './my-form/edit-info/edit-info.component';
import { AddExperienceComponent } from './my-form/add-experience/add-experience.component';
import { AddEducationComponent } from './my-form/add-education/add-education.component';
*/
import { projection } from '@angular/core/src/render3';
import { PersonalInfoModule } from './personal-info/personal-info.module';


@NgModule({
  declarations: [
    AppComponent,
    /*EditInfoComponent,
    AddExperienceComponent,
    AddEducationComponent,*/

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
