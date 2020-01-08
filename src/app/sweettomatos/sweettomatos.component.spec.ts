import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweettomatosComponent } from './sweettomatos.component';

describe('SweettomatosComponent', () => {
  let component: SweettomatosComponent;
  let fixture: ComponentFixture<SweettomatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweettomatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweettomatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
