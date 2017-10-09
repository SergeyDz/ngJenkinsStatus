import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcInstComponent } from './gc-inst.component';

describe('GcInstComponent', () => {
  let component: GcInstComponent;
  let fixture: ComponentFixture<GcInstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcInstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcInstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
