import { TestBed } from '@angular/core/testing';

import { HarvestService } from './harvest.service';

describe('HarvestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HarvestService = TestBed.get(HarvestService);
    expect(service).toBeTruthy();
  });
});
