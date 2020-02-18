import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingTestRoutingModule } from './routing-test-routing.module';
import { RoutingTestComponent } from './routing-test.component';
import { RoutingTest1Component } from './routing-test1/routing-test1.component';
import { RoutingTest2Component } from './routing-test2/routing-test2.component';

@NgModule({
  declarations: [
    RoutingTestComponent,
    RoutingTest1Component,
    RoutingTest2Component,
  ],
  imports: [
    CommonModule,
    RoutingTestRoutingModule,
  ],
  exports: [RoutingTestComponent
  ]
})
export class RoutingTestModule { }
