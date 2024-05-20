import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Usdot from '../USDOT/usdot';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'https://localhost:7104/api/CompanyDetails';

  constructor(private http: HttpClient) { }

  submitCompanyDetails(usdot: Usdot): Observable<any> {
    const payload = {
      content: [usdot], // Wrap Usdot object in content array
      retrievalDate: new Date().toISOString() // Set the current date as retrievalDate
    };

    console.log('Company Data for backend:', payload);
    return this.http.post(`${this.apiUrl}/companyDetails`, payload, { responseType: 'text' }).pipe(
      map((response: any) => {
        return { message: response };
      })
    );
  }
}
