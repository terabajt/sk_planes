import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFlightsComponent } from './edit-flights/edit-flights.component';
import { FlightsComponent } from './flights.component';

const routes: Routes = [
  { path: 'flights', component: FlightsComponent },
  { path: ':key', component: EditFlightsComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightsRoutingModule {}
