import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccMissionComponent } from './delete-acc-mission.component';

describe('DeleteAccMissionComponent', () => {
  let component: DeleteAccMissionComponent;
  let fixture: ComponentFixture<DeleteAccMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAccMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
