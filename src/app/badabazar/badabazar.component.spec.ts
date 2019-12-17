import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadabazarComponent } from './badabazar.component';

describe('BadabazarComponent', () => {
  let component: BadabazarComponent;
  let fixture: ComponentFixture<BadabazarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadabazarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadabazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
