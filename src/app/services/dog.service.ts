import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DogGridInfoResponse } from '../models/response/dog-grid-info-response.model';
import { DogGridImageResponse } from '../models/response/dog-grid-image-response.model';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = `https://api.thedogapi.com/v1/`;

  getDogs(): Observable<DogGridInfoResponse[]> {
    return this.http.get<DogGridInfoResponse[]>(`${this.baseUrl}breeds`);
  }

  getDogImage(referenceImageId: string): Observable<DogGridImageResponse> {
    return this.http.get<DogGridImageResponse>(`${this.baseUrl}images/${referenceImageId}`);
  }
}
