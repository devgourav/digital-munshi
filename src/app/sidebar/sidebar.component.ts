import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidebar',
  	templateUrl: './sidebar.component.html',
  	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	sidebarItems = ['Dashboard','Clients','Vendors','Items','Invoices','Quotes','Delivery Notes','Credit Notes','Purchase Orders',
	'Bills','Employees','Reports','Settings'];

	constructor() { }



	ngOnInit() {

	}

}
