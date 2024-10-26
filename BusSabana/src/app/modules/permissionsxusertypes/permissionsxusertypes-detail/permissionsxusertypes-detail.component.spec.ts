import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsxusertypesDetailComponent } from './permissionsxusertypes-detail.component';

describe('PermissionsxusertypesDetailComponent', () => {
  let component: PermissionsxusertypesDetailComponent;
  let fixture: ComponentFixture<PermissionsxusertypesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissionsxusertypesDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermissionsxusertypesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
