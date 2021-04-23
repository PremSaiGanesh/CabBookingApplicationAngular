import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCustomersSearchComponent } from './all-customers-search.component';

describe('AllCustomersSearchComponent', () => {
  let component: AllCustomersSearchComponent;
  let fixture: ComponentFixture<AllCustomersSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCustomersSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCustomersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
