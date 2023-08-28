import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQoutesComponent } from './all-qoutes.component';

describe('AllQoutesComponent', () => {
  let component: AllQoutesComponent;
  let fixture: ComponentFixture<AllQoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllQoutesComponent]
    });
    fixture = TestBed.createComponent(AllQoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
