import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomatosComponent } from './tomatos.component';

describe('TomatosComponent', () => {
  let component: TomatosComponent;
  let fixture: ComponentFixture<TomatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
