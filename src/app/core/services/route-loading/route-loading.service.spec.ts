import { TestBed } from '@angular/core/testing';

import { RouteLoadingService } from './route-loading.service';

describe('RouteLoadingService', () => {
  let service: RouteLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
