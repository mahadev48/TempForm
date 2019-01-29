import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllInfoComponent } from './personal-info/all-info/all-info.component';
const routes: Routes = [
	{
		path: "personal-info",
		component: AllInfoComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
