import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usdot } from './usdot';  // Ensure the path is correct

@Injectable({
  providedIn: 'root'
})
export class UsdotService {
  private resourceUrl = 'https://localhost:7104/api/UsdotFmcsaCarrier/usdot';

  constructor(private http: HttpClient) { }

  getUsdotData(usdotNumber: number): Observable<Usdot | null> {
    return this.http.get<Usdot>(`${this.resourceUrl}/${usdotNumber}`, { observe: 'response' })
      .pipe(
        map(response => {
          console.log('Received data:', response.body);
          if (response.body === null) {
            return null;
          }
          return response.body;
        })
      );
  }
}
