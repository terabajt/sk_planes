import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { FlightsService } from 'src/app/core/services/flights.service';
import { Flight } from 'src/app/models/flight.model';
import { FlightFormComponent } from '../flight-form/flight-form.component';

@Component({
  selector: 'app-edit-flights',
  templateUrl: './edit-flights.component.html',
  styleUrls: ['./edit-flights.component.scss']
})
export class EditFlightsComponent{

  @ViewChild('flightForm')
  flightForm!: FlightFormComponent;
  flight!: Flight

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flightsService: FlightsService,
    private toast: MatSnackBar
  ) { }

ngAfterViewInit() {
  this.loadFlight();
}

removeFlight() {
  this.flightsService.removeFlight(this.flight.key).then(this.onRemoveSuccess.bind(this), this.onFailure.bind(this));
}

editFlight() {
  this.flightsService.editFlight(this.flight.key, this.flightForm.form.value).then(this.onEditSuccess.bind(this), this.onFailure.bind(this))
}

private onEditSuccess() {
  this.router.navigate(['/dashboard'])
  this.toast.open('Flight has been successfully edited', '', {panelClass: 'toast-success'});

}

private onRemoveSuccess() {
  this.router.navigate(['/dashboard']);
  this.toast.open('Flight has been successfully removed', '', {panelClass: 'toast-success'});

}

private onFailure(error: string) {
  this.toast.open(error, '', {panelClass: 'toast-error'});

}

  private loadFlight() {
    const key = this.route.snapshot.params['key'];
    this.flightsService.getFlight(key).pipe(tap((flight: Flight) => this.flightForm.setFlight(flight))).subscribe(flight => this.flight = flight);
  }

}
