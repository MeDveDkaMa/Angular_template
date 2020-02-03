import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddToOrderComponent } from './form-add-to-order.component';

describe('FormAddToOrderComponent', () => {
  let component: FormAddToOrderComponent;
  let fixture: ComponentFixture<FormAddToOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddToOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddToOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
