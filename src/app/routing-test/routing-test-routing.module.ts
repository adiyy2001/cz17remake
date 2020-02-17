import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingTestComponent } from './routing-test.component';
import { RoutingTest1Component } from './routing-test1/routing-test1.component';
import { RoutingTest2Component } from './routing-test2/routing-test2.component';

const routes: Routes = [
  { path: '', redirectTo: 'witam' },
  { path: 'witam', component: RoutingTestComponent,
  children: [
    { path: 'test1', component:  RoutingTest1Component},
    { path: 'test2', component:  RoutingTest2Component}
  ] },

  // { path: 'hero/:id', redirectTo: '/superhero/:id' },
  // { path: 'superheroes',  component: HeroListComponent, data: { animation: 'heroes' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingTestRoutingModule { }
