import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteensDashboardComponent } from './canteens-dashboard.component';

describe('CanteensDashboardComponent', () => {
  let component: CanteensDashboardComponent;
  let fixture: ComponentFixture<CanteensDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanteensDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanteensDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
