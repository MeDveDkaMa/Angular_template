import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDishesComponent } from './list-of-dishes.component';

describe('ListOfUsersComponent', () => {
  let component: ListOfDishesComponent;
  let fixture: ComponentFixture<ListOfDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
