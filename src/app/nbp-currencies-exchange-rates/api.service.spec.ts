import { TestBed } from '@angular/core/testing';

import { NbpApiService } from './nbp-api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NbpApiService = TestBed.get(NbpApiService);
    expect(service).toBeTruthy();
  });
});
