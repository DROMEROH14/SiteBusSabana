import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusesDetailComponent } from './buses-detail.component';

describe('BusesDetailComponent', () => {
  let component: BusesDetailComponent;
  let fixture: ComponentFixture<BusesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusesDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
