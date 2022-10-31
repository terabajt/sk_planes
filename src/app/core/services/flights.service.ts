import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { Flight } from 'src/app/models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private API_URL = '/flights';

  constructor(
    private db: AngularFireDatabase
  ) { }

  getFlights(): Observable<Flight[]> {
return this.db.list<Flight>(this.API_URL).snapshotChanges().pipe(map(response => response.map(flight => this.assignKey(flight))));
  }
  private assignKey(flight: SnapshotAction<any>) {
return {...flight.payload.val(), key: flight.key }
  }
}