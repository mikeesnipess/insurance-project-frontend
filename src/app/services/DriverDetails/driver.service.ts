import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DriverDetails } from 'src/app/models/carrier/driver-models/driver-details-model'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private apiUrl = 'https://localhost:7104/api/DriverDetails'; // Replace with your backend API endpoint

  constructor(private http: HttpClient) {}

  submitDriverDetails(driverDetails: DriverDetails): Observable<any> {
    console.log('Driver Data for backend:', driverDetails);
    return this.http.post(`${this.apiUrl}/drivers`, driverDetails, { responseType: 'text' }).pipe(
      map((response: any) => {
        return { message: response };
      })
    );
  }
}
