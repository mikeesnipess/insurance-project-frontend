import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DriverDetails } from 'src/app/models/carrier/driver-models/driver-details-model';
import Usdot from 'src/app/services/USDOT/usdot';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private apiUrlGenerate = 'https://localhost:7104/api/GeneratePdf/generate';
  private apiUrlGenerateDocument = 'https://localhost:7104/api/GeneratePdf/generateDocument';

  constructor(private http: HttpClient) {}

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

    return this.http.post(this.apiUrlGenerate, payload, { headers, responseType: 'blob' });
  }

  generateDocument(driverDetails: DriverDetails, usdot: Usdot): Observable<Blob> {
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

    return this.http.post(this.apiUrlGenerateDocument, payload, { headers, responseType: 'blob' });
  }
}
