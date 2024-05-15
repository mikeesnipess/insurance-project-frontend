import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Usdot from '../USDOT/usdot';

@Injectable({
  providedIn: 'root'
})
export class McmxService {
  private resourceUrl = 'https://localhost:7104/api/UsdotFmcsaCarrier/mcmx';

  constructor(private http: HttpClient) { }

  getMcMxData(mcmxNumber: number): Observable<Usdot | null> {
    return this.http.get<{ content: Usdot[] }>(`${this.resourceUrl}/${mcmxNumber}`, { observe: 'response' })
      .pipe(
        map(response => {
          const data = response.body?.content[0] ?? null;
          console.log('Received data:', data);
          return data;
        })
      );
  }
}
