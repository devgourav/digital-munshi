import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgxElectronModule } from 'ngx-electron';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsComponent } from './settings/settings.component';
import { CompanyDetailsComponent } from './settings/company-details/company-details.component';
import { TaxDetailsComponent } from './settings/tax-details/tax-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SettingsComponent,
    CompanyDetailsComponent,
    TaxDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
