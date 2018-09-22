import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AromasFormComponent } from './aromas-form.component';

describe('AromasFormComponent', () => {
  let component: AromasFormComponent;
  let fixture: ComponentFixture<AromasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AromasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AromasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
