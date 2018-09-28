import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampushubDahsboardComponent } from './campushub-dahsboard.component';

describe('CampushubDahsboardComponent', () => {
  let component: CampushubDahsboardComponent;
  let fixture: ComponentFixture<CampushubDahsboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampushubDahsboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampushubDahsboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
