import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DogGridInfoResponse } from '../../../models/response/dog-grid-info-response.model';

@Component({
  selector: 'app-dog-info',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dog-info.component.html',
  styleUrl: './dog-info.component.scss'
})
export class DogInfoComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      dogInfo: DogGridInfoResponse;
    },
    private dialogRef: MatDialogRef<DogInfoComponent>,
  ){}

  close():void {
    this.dialogRef.close()
  }
}
