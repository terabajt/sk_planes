import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  flight: Flight;
  
  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Flight
  ) {
    this.flight = data;
  }

  close() {
    this.dialogRef.close();
  }

  goToEditFlight() {
    this.close();
this.router.navigate(['/dashboard/flights/', this.flight.key])
  }

}
