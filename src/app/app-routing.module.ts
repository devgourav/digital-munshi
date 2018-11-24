import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component'
import { SettingsComponent } from './settings/settings.component'
import { CompanyDetailsComponent} from './settings/company-details/company-details.component'
import { TaxDetailsComponent} from './settings/tax-details/tax-details.component'

const routes: Routes = [
	{
		path:'Settings',
		component: SettingsComponent
	},
	{
		path:'Settings/Company Details',
		component: CompanyDetailsComponent
	},
	{
		path:'Settings/Tax Details',
		component: TaxDetailsComponent
	},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [SettingsComponent,CompanyDetailsComponent,TaxDetailsComponent]
