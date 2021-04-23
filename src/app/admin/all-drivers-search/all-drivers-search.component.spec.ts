import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDriversSearchComponent } from './all-drivers-search.component';

describe('AllDriversSearchComponent', () => {
  let component: AllDriversSearchComponent;
  let fixture: ComponentFixture<AllDriversSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDriversSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDriversSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
