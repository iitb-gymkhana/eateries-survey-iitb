import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunriseDhabaFormComponent } from './sunrise-dhaba-form.component';

describe('SunriseDhabaFormComponent', () => {
  let component: SunriseDhabaFormComponent;
  let fixture: ComponentFixture<SunriseDhabaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunriseDhabaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunriseDhabaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
