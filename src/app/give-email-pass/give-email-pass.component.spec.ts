import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveEmailPassComponent } from './give-email-pass.component';

describe('GiveEmailPassComponent', () => {
  let component: GiveEmailPassComponent;
  let fixture: ComponentFixture<GiveEmailPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveEmailPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveEmailPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
