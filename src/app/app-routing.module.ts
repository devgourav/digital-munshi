import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component'
import { SettingsComponent } from './settings/settings.component'
import { CompanyDetailsComponent} from './settings/company-details/company-details.component'
import { TaxDetailsComponent} from './settings/tax-details/tax-details.component'
import { BillDetailsComponent} from './bill/bill-details/bill-details.component'
import { NewBillComponent } from './bill/new-bill/new-bill.component';

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
	{
		path:'Bills',
		component: BillDetailsComponent
	},
	{
		path:'Bills/New Bill',
		component: NewBillComponent
	},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [SettingsComponent,CompanyDetailsComponent,TaxDetailsComponent]
