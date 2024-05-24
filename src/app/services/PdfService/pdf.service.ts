import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DriverDetails } from 'src/app/models/carrier/driver-models/driver-details-model';
import Usdot from 'src/app/services/USDOT/usdot'; // Importing Usdot as the default export

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private apiUrl = 'https://localhost:7104/api/GeneratePdf/generate'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  generatePdf(driverDetails: DriverDetails, usdot: Usdot): Observable<Blob> {
    const payload = {
      driverDetails,
      companyDetails: {
        content: [usdot],
        retrievalDate: new Date().toISOString()
      }
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, payload, { headers, responseType: 'blob' });
  }
}
