import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQouteComponent } from './single-qoute.component';

describe('SingleQouteComponent', () => {
  let component: SingleQouteComponent;
  let fixture: ComponentFixture<SingleQouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleQouteComponent]
    });
    fixture = TestBed.createComponent(SingleQouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
