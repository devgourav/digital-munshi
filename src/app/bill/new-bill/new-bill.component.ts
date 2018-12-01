import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.scss']
})
export class NewBillComponent implements OnInit {

  constructor() { }

  billTableHeaders = ['No','Item and Description','Category','Unit','Quantity','Price','Tax','Total','Actions']

  ngOnInit() {
  }

}
