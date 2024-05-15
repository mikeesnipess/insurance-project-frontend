import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Usdot  from '../USDOT/usdot'; // Make sure UsdotData matches the new structure

@Injectable({
  providedIn: 'root'
})
export class NameSearchService {
  private resourceUrl = 'https://localhost:7104/api/UsdotFmcsaCarrier/company';

  constructor(private http: HttpClient) { }

  getCompanyName(companyName: string): Observable<Usdot[]> {
    return this.http.get<{ content: Usdot[] }>(`${this.resourceUrl}/${companyName}`, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<{ content: Usdot[] }>) => response.body?.content ?? [])
      );
  }
  
}
