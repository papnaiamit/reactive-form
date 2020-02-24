import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-membership-info',
  templateUrl: './membership-info.component.html',
  styleUrls: ['./membership-info.component.scss']
})
export class MembershipInfoComponent implements OnInit {
  @Input() public membershipDetailsForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

}
