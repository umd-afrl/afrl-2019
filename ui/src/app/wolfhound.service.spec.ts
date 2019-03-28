import { TestBed } from '@angular/core/testing';

import { WolfhoundService } from './wolfhound.service';

describe('WolfhoundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WolfhoundService = TestBed.get(WolfhoundService);
    expect(service).toBeTruthy();
  });
});
