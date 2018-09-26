import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusHubFormComponent } from './campus-hub-form.component';

describe('CampusHubFormComponent', () => {
  let component: CampusHubFormComponent;
  let fixture: ComponentFixture<CampusHubFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusHubFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusHubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
