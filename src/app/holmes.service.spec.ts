import { TestBed } from '@angular/core/testing';

import { HolmesService } from './holmes.service';

describe('HolmesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HolmesService = TestBed.get(HolmesService);
    expect(service).toBeTruthy();
  });
});
