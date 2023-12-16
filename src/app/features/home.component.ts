import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public companyService: CompanyService) {}

  makePreferred(id: number) {
    console.log('clicked');
    this.companyService.setPreferred(id);
  }
  unmakePreferred(id: number) {
    this.companyService.resetPreferred(id);
  }

  ngOnInit(): void {
    this.companyService.getCompanies();
  }
}
