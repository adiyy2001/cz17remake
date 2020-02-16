import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingTestRoutingModule } from './routing-test-routing.module';
import { RoutingTestComponent } from './routing-test.component';

@NgModule({
  declarations: [
    RoutingTestComponent,
  ],
  imports: [
    CommonModule,
    RoutingTestRoutingModule,
  ],
  exports: [RoutingTestComponent
  ]
})
export class RoutingTestModule { }
