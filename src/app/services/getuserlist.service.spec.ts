import { TestBed } from '@angular/core/testing';

import { GetuserlistService } from './getuserlist.service';

describe('GetuserlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetuserlistService = TestBed.get(GetuserlistService);
    expect(service).toBeTruthy();
  });
});
