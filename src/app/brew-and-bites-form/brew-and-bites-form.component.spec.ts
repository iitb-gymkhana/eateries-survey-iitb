import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewAndBitesFormComponent } from './brew-and-bites-form.component';

describe('BrewAndBitesFormComponent', () => {
  let component: BrewAndBitesFormComponent;
  let fixture: ComponentFixture<BrewAndBitesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewAndBitesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewAndBitesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
