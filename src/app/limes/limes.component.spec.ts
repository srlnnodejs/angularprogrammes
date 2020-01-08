import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimesComponent } from './limes.component';

describe('LimesComponent', () => {
  let component: LimesComponent;
  let fixture: ComponentFixture<LimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
