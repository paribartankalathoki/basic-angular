import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

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
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onDetailView(id: string, paramName: string, address: string, age: number) {
    this.router.navigate(['/home/detail-view', id], {
      queryParams: {name: paramName, address: address, age: age}
    });
  }

}
