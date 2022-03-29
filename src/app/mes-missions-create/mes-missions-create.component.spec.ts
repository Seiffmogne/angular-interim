import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesMissionsCreateComponent } from './mes-missions-create.component';

describe('MesMissionsCreateComponent', () => {
  let component: MesMissionsCreateComponent;
  let fixture: ComponentFixture<MesMissionsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesMissionsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesMissionsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
