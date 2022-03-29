import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionCreateEditComponent } from './mission-create-edit.component';

describe('MissionCreateEditComponent', () => {
  let component: MissionCreateEditComponent;
  let fixture: ComponentFixture<MissionCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionCreateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
