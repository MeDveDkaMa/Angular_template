import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddToDishComponent } from './form-add-to-dish.component';

describe('FormAddToDishComponent', () => {
  let component: FormAddToDishComponent;
  let fixture: ComponentFixture<FormAddToDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddToDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddToDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
