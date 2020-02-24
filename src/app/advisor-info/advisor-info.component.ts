import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-advisor-info',
  templateUrl: './advisor-info.component.html',
  styleUrls: ['./advisor-info.component.scss']
})
export class AdvisorInfoComponent implements OnInit {
  @Input() public advisorDetailsForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }


}
