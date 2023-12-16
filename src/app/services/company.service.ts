import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  loadedCompanies: Company[] = [];

  constructor(public http: HttpClient) {}

  getCompanies() {
    this.http
      .get<Company[]>('http://localhost:3000/companies')
      .subscribe((res) => {
        console.log('res is: ', res);
        this.loadedCompanies = res;
      });
  }
  setPreferred(id: number) {
    this.http
      .patch('http://localhost:3000/companies/' + `${id}`, { preferred: true })
      .subscribe((res) => {
        console.log('is it patched?', res);
        this.getCompanies();
      });
  }
  resetPreferred(id: number) {
    this.http
      .patch('http://localhost:3000/companies/' + `${id}`, { preferred: null })
      .subscribe((res) => {
        console.log('is it patched?', res);
        this.getCompanies();
      });
  }
}
