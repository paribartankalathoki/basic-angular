import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tableData = [
    {
      id: '001',
      name: 'Ram',
      address: 'Kathmandu',
      age: 25
    },
    {
      id: '002',
      name: 'Sita',
      address: 'Butwal',
      age: 50
    },
    {
      id: '003',
      name: 'Gita',
      address: 'Kailali',
      age: 44
    },
    {
      id: '004',
      name: 'Gita Khanl',
      address: 'Pokhara',
      age: 99
    }
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRouteChange() {
    this.router.navigate(['/another-page']);
  }
  onNavigateById(value: string) {
    this.router.navigate(['/home', value]);
  }

  onDetailView(id: string, paramName: string, address: string, age: number) {
    this.router.navigate(['/detail-view', id], {
      queryParams: {name: paramName, address: address, age: age}
    });
  }
}
