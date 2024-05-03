import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Usdot  from './usdot'; // Make sure UsdotData matches the new structure

@Injectable({
  providedIn: 'root'
})
export class UsdotService {
  private resourceUrl = 'https://localhost:7104/api/UsdotFmcsaCarrier/usdot';

  constructor(private http: HttpClient) { }

  getUsdotData(usdotNumber: number): Observable<Usdot | null> {
    return this.http.get<{content: Usdot[]}>(`${this.resourceUrl}/${usdotNumber}`, { observe: 'response' })
      .pipe(
        map(response => {
          // Assuming content is always an array with at least one UsdotData object
          const data = response.body?.content[0] ?? null;
          console.log('Received data:', data);
          return data;
        })
      );
  }
}
