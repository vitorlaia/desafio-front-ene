import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { DogService } from '../services/dog.service';
import { Observable, of } from 'rxjs';
import { DogGridInfoResponse } from '../models/response/dog-grid-info-response.model';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  class dogServiceMock {
    getDogs(): Observable<DogGridInfoResponse[]> {
      return of([])
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponent],
      providers: [{provide: DogService, useClass: dogServiceMock}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
