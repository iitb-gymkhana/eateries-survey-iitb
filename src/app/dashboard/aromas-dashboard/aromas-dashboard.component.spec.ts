import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AromasDashboardComponent } from './aromas-dashboard.component';

describe('AromasDashboardComponent', () => {
  let component: AromasDashboardComponent;
  let fixture: ComponentFixture<AromasDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AromasDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AromasDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
