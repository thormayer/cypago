import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessControlRoutingModule } from './access-control-routing.module';
import { AccessControlItemComponent } from './components/access-control-item/access-control-item.component';
import { AccessControlListComponent } from './components/access-control-item/access-control-list/access-control-list.component';
import { AccessControlComponent } from './components/access-control/access-control.component';

const components = [
  AccessControlItemComponent, AccessControlListComponent
]

@NgModule({
  
  declarations: [...components, AccessControlComponent],
  exports: [...components],
  imports: [
    CommonModule,
    AccessControlRoutingModule,
    SharedModule
  ]
})
export class AccessControlModule { }
