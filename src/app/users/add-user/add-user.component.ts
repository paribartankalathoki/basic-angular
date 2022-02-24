import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  
  userForm: FormGroup = new FormGroup({});

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      name:[undefined],
      email:[undefined],
      password:[undefined],
      mobileNumber:[undefined],
    });
  }

  onAddUser(user: any) {
    this.userService.addUsers(user).subscribe(
      (response: any) => {
        console.log(response);
      }, error => {
        console.error(error);
      }
    );
  }

  goBack() {
    this.location.back();
  }

}
