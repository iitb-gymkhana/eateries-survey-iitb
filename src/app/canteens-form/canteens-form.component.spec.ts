import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteensFormComponent } from './canteens-form.component';

describe('CanteensFormComponent', () => {
  let component: CanteensFormComponent;
  let fixture: ComponentFixture<CanteensFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanteensFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanteensFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
