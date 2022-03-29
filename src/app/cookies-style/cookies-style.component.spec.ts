import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesStyleComponent } from './cookies-style.component';

describe('CookiesStyleComponent', () => {
  let component: CookiesStyleComponent;
  let fixture: ComponentFixture<CookiesStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookiesStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
