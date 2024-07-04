import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogInfoComponent } from './dog-info.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('DogInfoComponent', () => {
  let component: DogInfoComponent;
  let fixture: ComponentFixture<DogInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogInfoComponent, MatDialogModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
