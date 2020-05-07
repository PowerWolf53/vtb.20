import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CommunicationService} from '../../service/communication.service';
import {User} from '../../../authentication/model/user';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent implements OnInit {

    user: User;

  constructor(
    public dialogRef: MatDialogRef<EditUserModalComponent>,
    private communicationService: CommunicationService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.user = this.data.user;
  }

  handleCompleteRegistration() {
    this.dialogRef.close();
    this.communicationService.emitRegComplete();
  }
}
