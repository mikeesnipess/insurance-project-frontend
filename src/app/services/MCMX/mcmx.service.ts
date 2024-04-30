import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class McmxService {
  private resourceUrl = 'https://localhost:7104/api/UsdotFmcsaCarrier/mcmx';

  constructor(private http: HttpClient) { }

  getMcMxData(mcmxNumber: number): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}/${mcmxNumber}`, { observe: 'response' })
      .pipe(
        map(response => {
          // Check if the content is empty or null and handle accordingly
          if (!response.body.content || response.body.content.length === 0) {
            return null;  // return null when content is null or empty
          }
          return response.body;
        })
      );
  }
}
