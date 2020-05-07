import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderComponent } from './components/header/header.component';
import {
  MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import { UserTableComponent } from './components/user-table/user-table.component';
import { AddUserModalComponent } from './components/add-user-modal/add-user-modal.component';
import {FormsModule} from '@angular/forms';
import {AuthenticationModule} from '../authentication/authentication.module';
import { EditUserModalComponent } from './components/edit-user-modal/edit-user-modal.component';




@NgModule({
  declarations: [AdminLayoutComponent, HeaderComponent, UserTableComponent, AddUserModalComponent, EditUserModalComponent],
  entryComponents: [AddUserModalComponent, EditUserModalComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    AuthenticationModule
  ]
})
export class AdminModule { }
