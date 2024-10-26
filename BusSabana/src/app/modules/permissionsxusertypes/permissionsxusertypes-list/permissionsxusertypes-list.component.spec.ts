import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsxusertypesListComponent } from './permissionsxusertypes-list.component';

describe('PermissionsxusertypesListComponent', () => {
  let component: PermissionsxusertypesListComponent;
  let fixture: ComponentFixture<PermissionsxusertypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissionsxusertypesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermissionsxusertypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
