import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LettersCounterComponent } from './pages/letters-counter/letters-counter.component';
import { TypeAheadComponent } from './pages/typeahead/typeahead.component';
import { CurrentTimeComponent } from './pages/current-time/current-time.component';

const routes: Routes = [
  { path: 'letters-counter', component: LettersCounterComponent },
  { path: 'type-ahead', component: TypeAheadComponent },
  { path: 'current-time', component: CurrentTimeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
