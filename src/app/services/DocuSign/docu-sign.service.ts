import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Usdot from '../USDOT/usdot'; // Adjust the path as necessary
import { DriverDetails } from 'src/app/models/carrier/driver-models/driver-details-model'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root'
})
export class CombinedService {
  private apiUrl = 'https://localhost:7104/api/DocuSign/SendEnvelope'; // Combined endpoint

  constructor(private http: HttpClient) {}

  submitDetails(driverDetails: DriverDetails, usdot: Usdot): Observable<any> {
    const payload = {
      driverDetails,
      companyDetails: {
        content: [usdot],
        retrievalDate: new Date().toISOString()
      }
    };

    console.log('Combined Data for backend:', payload);
    return this.http.post<{ message: string, result: string }>(this.apiUrl, payload).pipe(
      map(response => response.result) // Return only the result (envelope ID)
    );
  }
}
