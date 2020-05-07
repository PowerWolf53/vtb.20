import {Component, OnInit} from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {User} from '../../../authentication/model/user';
import {HttpClient} from '@angular/common/http';
import {AddUserModalComponent} from '../add-user-modal/add-user-modal.component';
import {CommunicationService} from '../../service/communication.service';
import {EditUserModalComponent} from '../edit-user-modal/edit-user-modal.component';





@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['name', 'surname', 'patronymic', 'login', 'password', 'cardNumber', 'passportNumber', 'role'];
  dataSource = new MatTableDataSource<User>(this.users);
  selection = new SelectionModel<User>(false, []);

  constructor(private http: HttpClient, public dialog: MatDialog,  private communicationService: CommunicationService, ) {

  }


  getUsers() {
    this.http.get<any>('http://localhost:8080/api/vtb/user/all',
      ).subscribe(data => {
      this.users = data;
      this.dataSource = new MatTableDataSource<User>(this.users);
    });
  }

  ngOnInit(): void {
    this.getUsers();
    this.subscribeToAddUser();
  }

  addUser() {
    const dialogRef = this.dialog.open(AddUserModalComponent, {
      width: '500px',
    });
  }

  private subscribeToAddUser() {
    this.communicationService.regCompleted.subscribe(reg => {
      this.getUsers();
    });
  }

  deleteUser() {
    const selectedId: number = this.selection.selected[0].id;
    this.http.delete<any>(`http://localhost:8080/api/vtb/user/delete/${selectedId}`,
    ).subscribe(data => {
      this.getUsers();
    });
  }

  editUser() {
    const dialogRef = this.dialog.open(EditUserModalComponent, {
      width: '500px',
      data: {user: this.selection.selected[0]}
    });
  }
}
