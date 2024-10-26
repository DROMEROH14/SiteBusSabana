import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertypesListComponent } from './usertypes-list.component';

describe('UsertypesListComponent', () => {
  let component: UsertypesListComponent;
  let fixture: ComponentFixture<UsertypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsertypesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsertypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
