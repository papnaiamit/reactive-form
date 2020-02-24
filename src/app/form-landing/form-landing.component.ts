import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form-landing',
  templateUrl: './form-landing.component.html',
  styleUrls: ['./form-landing.component.scss']
})
export class FormLandingComponent implements OnInit {
  public parentForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();

    // this.parentForm.valueChanges.subscribe((newVal) => {
    //   console.log('1', newVal);
    // });
  }

  public createForm() {
    this.parentForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
      adFirstName: [''],
      adLastName: [''],
      adEmail: [''],
      adPhoneNumber: [''],
      membershipNumber : [''],
      membershipId: ['']
    });
    this.setValidator();
  }

  public setValidator() {

  }

  public onSubmit(event) {
    console.log("submit", event);
  }
}
