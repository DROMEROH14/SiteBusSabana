import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsDetailComponent } from './assignments-detail.component';

describe('AssignmentsDetailComponent', () => {
  let component: AssignmentsDetailComponent;
  let fixture: ComponentFixture<AssignmentsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignmentsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignmentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
