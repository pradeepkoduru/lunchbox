import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressSearchComponent } from './adress-search.component';

describe('AdressSearchComponent', () => {
  let component: AdressSearchComponent;
  let fixture: ComponentFixture<AdressSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
