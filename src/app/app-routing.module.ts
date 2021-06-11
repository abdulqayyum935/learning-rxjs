import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { FromEventComponent } from './from-event/from-event.component';
import { HomeComponent } from './home/home.component';
import { IntervalComponent } from './interval/interval.component';
import { ObservableComponent } from './observable/observable.component';
import { OffFromComponent } from './off-from/off-from.component';
import { PromiseComponent } from './promise/promise.component';
import { ToarrayComponent } from './toarray/toarray.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  { path: 'off-from', component: OffFromComponent },
  { path: 'toarray', component: ToarrayComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'interval', component: IntervalComponent },
  { path: 'fromevent', component: FromEventComponent },
  { path: 'custom-observable', component: CustomObservableComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
