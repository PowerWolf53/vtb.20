import { NgModule } from '@angular/core';
import { AuthenticationLayoutComponent } from './layout/authentication-layout/authentication-layout.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatStepperModule, MatTabsModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [AuthenticationLayoutComponent, SignInFormComponent, SignUpFormComponent],
  imports: [
    HttpClientModule,
    MatTabsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatStepperModule
  ],
  exports: [
    SignUpFormComponent
  ]
})
export class AuthenticationModule { }
