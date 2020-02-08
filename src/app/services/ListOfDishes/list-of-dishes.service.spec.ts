import { TestBed } from '@angular/core/testing';

import { ListOfDishesService } from './list-of-dishes.service';

describe('ListOfUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListOfDishesService = TestBed.get(ListOfDishesService);
    expect(service).toBeTruthy();
  });
});
