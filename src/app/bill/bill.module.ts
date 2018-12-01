import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { NewBillComponent } from './new-bill/new-bill.component';

import { BillRoutingModule} from './bill-routing.module'

@NgModule({
  declarations: [BillDetailsComponent, NewBillComponent],
  imports: [
    CommonModule,
    BillRoutingModule
  ]
})
export class BillModule { }
