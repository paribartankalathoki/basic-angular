import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm: FormGroup = new FormGroup({});
  
  constructor(
    private form: FormBuilder
  ) { }

  ngOnInit(): void {
    this.reactiveForm = this.form.group({
      userFirstName: [undefined, Validators.required],
      address: [undefined, Validators.required],
    });
  }

  onSubmitForm(form: any): void {
    console.log(form.value);
  }
}
