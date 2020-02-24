import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLandingComponent } from './form-landing/form-landing.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { MembershipInfoComponent } from './membership-info/membership-info.component';
import { AdvisorInfoComponent } from './advisor-info/advisor-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FormLandingComponent,
    PersonalInfoComponent,
    MembershipInfoComponent,
    AdvisorInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
