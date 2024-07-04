import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { MatDialog } from '@angular/material/dialog';
import { DogGridImageResponse } from '../../../models/response/dog-grid-image-response.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let dialogSpy: jasmine.Spy;
  let mockDialog: MatDialog;
  
  const dogGridImageResponse: DogGridImageResponse = {
    breeds: [
      {
        name: 'Shiba Inu',
        temperament: 'Charming, Fearless, Keen, Alert, Confident, Faithful',
        weight: { imperial: '', metric: '' },
        height: { imperial: '', metric: '' },
        id: 0,
        bred_for: '',
        breed_group: '',
        life_span: '',
        origin: '',
        reference_image_id: ''
      },
    ],
    url: 'https://example.com/shiba-inu.jpg',
    id: '',
    width: 0,
    height: 0
  };
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GridComponent,
        MatCardModule,
        MatButtonModule,
        BrowserAnimationsModule,
        NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    mockDialog = TestBed.inject(MatDialog);
    dialogSpy = mockDialog.open as jasmine.Spy;
  });

  beforeEach(() => {
    component.dogGridInfo = dogGridImageResponse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display dog information correctly', () => {
    const title = fixture.debugElement.query(By.css('mat-card-title')).nativeElement;
    const image = fixture.debugElement.query(By.css('img')).nativeElement;
    const content = fixture.debugElement.query(By.css('mat-card-content p')).nativeElement;

    expect(title.textContent).toContain('Shiba Inu');
    expect(image.src).toBe('https://example.com/shiba-inu.jpg');
    expect(content.textContent).toContain('Charming, Fearless, Keen, Alert, Confident, Faithful');
  });  
});
