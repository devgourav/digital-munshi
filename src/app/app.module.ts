import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BillModule } from './bill/bill.module';

import { AppRoutingModule,RoutingComponents } from './app-routing.module';
import { NgxElectronModule } from 'ngx-electron';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule,
    BillModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[SidebarComponent]
})
export class AppModule { }
