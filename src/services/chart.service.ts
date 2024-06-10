import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor() {}

  getBarChartData(): Observable<any[]> {
    // Simulated data, you can replace it with your actual data fetching logic
    return of([30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 120, 150]);
  }
}
