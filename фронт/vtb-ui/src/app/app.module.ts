import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {AuthenticationModule} from './modules/authentication/authentication.module';
import {AuthenticationLayoutComponent} from './modules/authentication/layout/authentication-layout/authentication-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MainLayoutComponent} from './modules/main/main-layout/main-layout.component';
import {MainModule} from './modules/main/main.module';
import {AdminModule} from './modules/admin/admin.module';
import {AdminLayoutComponent} from './modules/admin/admin-layout/admin-layout.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AuthenticationModule,
    MainModule,
    AdminModule,
    RouterModule.forRoot([
      { path: '', component: AuthenticationLayoutComponent },
      { path: 'main', component: MainLayoutComponent },
      { path: 'admin', component: AdminLayoutComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { showError: true }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
