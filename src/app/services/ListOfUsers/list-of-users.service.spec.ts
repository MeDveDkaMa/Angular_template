import { TestBed } from '@angular/core/testing';

import { ListOfUsersService } from './list-of-users.service';

describe('ListOfUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListOfUsersService = TestBed.get(ListOfUsersService);
    expect(service).toBeTruthy();
  });
});
