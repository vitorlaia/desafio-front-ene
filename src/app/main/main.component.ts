import { Component, OnInit } from '@angular/core';
import { DogService } from '../services/dog.service';
import { DogGridInfoResponse } from '../models/response/dog-grid-info-response.model';
import { GridComponent } from './components/grid/grid.component';
import { CommonModule } from '@angular/common';
import { DogGridImageResponse } from '../models/response/dog-grid-image-response.model';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { forkJoin } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [GridComponent, CommonModule, MatProgressSpinnerModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements	OnInit{
  constructor(
    private dogService: DogService,
    private _snackBar: MatSnackBar
  ){}

  dogGridInfos: DogGridImageResponse[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.loading = true;
    this.dogService.getDogs().subscribe({
      next: (result) => {

        this.getDogImages(result);
      },
      error: (err: HttpErrorResponse) => {
        this.handleError(err.message);
        this.loading = false;
      }
    })
  }

  getDogImages(infos: DogGridInfoResponse[]): void {
    const requests = infos.map(info => this.dogService.getDogImage(info.reference_image_id));

    forkJoin(requests).subscribe({
      next: (results) => {
        this.dogGridInfos.push(...results);
      },
      complete: () => {
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.handleError(err.message);
        this.loading = false;
      }
    });
  }

  handleError(errorMessage: string) {
    this._snackBar.open(errorMessage, '', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 1000
    });
  }
}
