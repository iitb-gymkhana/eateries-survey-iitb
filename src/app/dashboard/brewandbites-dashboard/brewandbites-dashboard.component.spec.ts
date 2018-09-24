import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewandbitesDashboardComponent } from './brewandbites-dashboard.component';

describe('BrewandbitesDashboardComponent', () => {
  let component: BrewandbitesDashboardComponent;
  let fixture: ComponentFixture<BrewandbitesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewandbitesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewandbitesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
