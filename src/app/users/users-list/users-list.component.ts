import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
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

  usersResponse: any | [] = [];
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers() {
    this.userService.listAllUsers().subscribe(
      (response: any) => {
        console.log(response);
        this.usersResponse = response.users;
      }, (error: any) => {
        console.error(error);
      }
    );
  }

  onDetailView(id: string, paramName: string, address: string, age: number) {
    this.router.navigate(['/home/users-details', id], {
      queryParams: {name: paramName, address: address, age: age}
    });
  }

  onEditUser(id: any) {
    this.router.navigate(['/home/edit-users', id]);
  }

  onDeleteUser(id: any) {
    // to do
  }

}
