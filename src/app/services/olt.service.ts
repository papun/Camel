import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DeviceDto } from '../admin/models/custom.model';

const apiUrl = 'http://localhost:8080/dgf/';

@Injectable({
  providedIn: 'root'
})
export class OltService {

  constructor() { }

  http = inject(HttpClient);

  getoltDetails() {
    return this.http.get<DeviceDto>(`${apiUrl}devices`);
  }
}
