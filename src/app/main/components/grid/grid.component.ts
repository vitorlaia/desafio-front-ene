import { Component, Input, ViewEncapsulation } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { DogGridImageResponse } from '../../../models/response/dog-grid-image-response.model';
import { MatDialog } from '@angular/material/dialog';
import { DogInfoComponent } from '../dog-info/dog-info.component';

@Component({
  selector: 'grid',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class GridComponent{
  constructor(
    private dialog: MatDialog,
  ){}  
  @Input({ required: true }) dogGridInfo!: DogGridImageResponse;

  openMoreInfo(): void {
    this.dialog.open(DogInfoComponent, {
      data: {dogInfo: this.dogGridInfo.breeds[0] },
      maxWidth: '100vw !important',
      maxHeight: '100vh !important',
    });
  }

}
