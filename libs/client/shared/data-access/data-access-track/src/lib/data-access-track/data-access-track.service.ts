import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getTrack(url: string): Observable<{ presigned_url: string }> {
    return this.http.get<{ presigned_url: string }>(
      `${this.baseUrl}/track?url=${url}`
    );
  }
}
