import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { MaterialModule } from '../material/material.module';
import { NewFlightComponent } from './new-flight/new-flight.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';

import { FlightsRoutingModule } from './flights-routing.module';
import { EditFlightComponent } from './edit-flights/edit-flights.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    FlightsComponent,
    FlightCardComponent,
    NewFlightComponent,
    FlightFormComponent,
    DetailsComponent,
    EditFlightComponent,
  ],
  entryComponents: [NewFlightComponent, DetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlightsRoutingModule,
    MatDialogModule,
  ],
  exports: [FlightsComponent],
})
export class FlightsModule {}
