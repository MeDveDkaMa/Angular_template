import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeleteDishComponent } from './form-delete-dish.component';

describe('FormDeleteDishComponent', () => {
  let component: FormDeleteDishComponent;
  let fixture: ComponentFixture<FormDeleteDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDeleteDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDeleteDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
