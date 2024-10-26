import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertypesDetailComponent } from './usertypes-detail.component';

describe('UsertypesDetailComponent', () => {
  let component: UsertypesDetailComponent;
  let fixture: ComponentFixture<UsertypesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsertypesDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsertypesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
