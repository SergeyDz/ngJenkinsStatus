import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicddashboardComponent } from './cicddashboard.component';

describe('CicddashboardComponent', () => {
  let component: CicddashboardComponent;
  let fixture: ComponentFixture<CicddashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicddashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
