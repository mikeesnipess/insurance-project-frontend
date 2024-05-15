import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Usdot from './usdot'; 

@Injectable({
  providedIn: 'root'
})
export class UsdotService {
  private resourceUrl = 'https://localhost:7104/api/UsdotFmcsaCarrier/usdot';

  constructor(private http: HttpClient) { }

  getUsdotData(usdotNumber: number): Observable<Usdot | null> {
    return this.http.get<{ content: Usdot[] }>(`${this.resourceUrl}/${usdotNumber}`, { observe: 'response' })
      .pipe(
        map(response => {
          const data = response.body?.content[0] ?? null;
          console.log('Received data:', data);
          return data;
        })
      );
  }
}
