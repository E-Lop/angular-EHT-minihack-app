import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../models/company.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  company: any = {};

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const id = +activatedRoute.snapshot.params['id'];
    http
      .get<Company[]>(
        'https://my-json-server.typicode.com/zoelounge/menupizza/companies/' +
          `${id}`
      )
      .subscribe((res) => {
        this.company = res;
      });
  }
}
