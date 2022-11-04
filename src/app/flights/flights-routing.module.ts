import { NgModule } from '@angular/core';
import { FlightsComponent } from './flights.component';
import { RouterModule, Routes } from '@angular/router';
import { EditFlightComponent } from './edit-flights/edit-flights.component';

const routes: Routes = [
  { path: '', component: FlightsComponent },
  { path: ':key', component: EditFlightComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightsRoutingModule {}
