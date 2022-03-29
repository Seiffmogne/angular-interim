import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifComptComponent } from './verif-compt.component';

describe('VerifComptComponent', () => {
  let component: VerifComptComponent;
  let fixture: ComponentFixture<VerifComptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifComptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifComptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
