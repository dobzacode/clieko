import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getTrack(url: string): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/track?url=${url}`);
  }
}
