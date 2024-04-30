import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsdotService {
  private resourceUrl = 'https://localhost:7104/api/UsdotFmcsaCarrier/usdot';

  constructor(private http: HttpClient) { }

  getUsdotData(usdotNumber: number): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}/${usdotNumber}`, { observe: 'response' })
      .pipe(
        map(response => {
          // Check if the content is null and handle accordingly
          if (response.body.content === null) {
            return null;
          }
          return response.body;
        })
      );
  }
}
