import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSearchModalComponent } from './address-search-modal.component';

describe('AddressSearchModalComponent', () => {
  let component: AddressSearchModalComponent;
  let fixture: ComponentFixture<AddressSearchModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressSearchModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
