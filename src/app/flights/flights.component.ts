import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FlightsService } from '../core/services/flights.service';
import { Flight } from '../models/flight.model';
import { DetailsComponent } from './details/details.component';
import { NewFlightComponent } from './new-flight/new-flight.component';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
})
export class FlightsComponent {
  flights$: Observable<Flight[]> = this.flightService.getFlights();
  constructor(
    private dialog: MatDialog,
    private flightService: FlightsService
  ) {}

  openNewFlightModal() {
    this.dialog.open(NewFlightComponent);
  }

  showDetails(flight: any) {
this.dialog.open(DetailsComponent, {data: flight});
  }
}
