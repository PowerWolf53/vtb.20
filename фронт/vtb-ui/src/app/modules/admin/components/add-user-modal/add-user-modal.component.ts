import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CommunicationService} from '../../service/communication.service';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.css']
})
export class AddUserModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddUserModalComponent>,
    private communicationService: CommunicationService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  handleCompleteRegistration() {
    this.dialogRef.close();
    this.communicationService.emitRegComplete();
  }
}
