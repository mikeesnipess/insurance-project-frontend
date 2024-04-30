import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameSearchService {
  private resourceUrl = 'https://localhost:7104/api/UsdotFmcsaCarrier/company';

  constructor(private http: HttpClient) { }

  getCompanyName(companyName: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.resourceUrl}/${companyName}`);
  }
}
