import { Component, ViewChild } from '@angular/core';

import { FlightFormComponent } from '../flight-form/flight-form.component';
import { FlightsService } from '../../core/services/flights.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.scss'],
})
export class NewFlightComponent {
  @ViewChild('flightForm') flightForm: FlightFormComponent;

  constructor(
    private flightsService: FlightsService,
    private toast: MatSnackBar,
    private dialogRef: MatDialogRef<NewFlightComponent>
  ) {}

  createFlight() {
    this.flightsService
      .addFlight(this.flightForm.form.value)
      .then(
        this.onCreatingSuccess.bind(this),
        this.onCreatingFailure.bind(this)
      );
  }

  private onCreatingSuccess() {
    this.dialogRef.close();
    this.toast.open('Flight has been successfully created!', '', {
      panelClass: 'toast-success',
    });
  }

  private onCreatingFailure(error) {
    this.toast.open(error.message, '', { panelClass: 'toast-error' });
  }
}
