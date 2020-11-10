import { CypagoProgressBarComponent } from './components/cypago-progress-bar/cypago-progress-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CypagoCardComponent } from './components/cypago-card/cypago-card.component';
import { KeysPipe } from './pipes/keys.pipe';


const components = [
  CypagoCardComponent,
  CypagoProgressBarComponent,
  KeysPipe
]

@NgModule({
  declarations: [ ...components ],
  exports: [ ...components ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
