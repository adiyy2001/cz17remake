import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingTestComponent } from './routing-test.component';

const routes: Routes = [
  { path: '', component: RoutingTestComponent },
  // { path: 'hero/:id', redirectTo: '/superhero/:id' },
  // { path: 'superheroes',  component: HeroListComponent, data: { animation: 'heroes' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingTestRoutingModule { }
