import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatosComponent } from './potatos.component';

describe('PotatosComponent', () => {
  let component: PotatosComponent;
  let fixture: ComponentFixture<PotatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
