import { TestBed } from '@angular/core/testing';

import { MicrowaveService } from './microwave.service';

describe('MicrowaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MicrowaveService = TestBed.get(MicrowaveService);
    expect(service).toBeTruthy();
  });
});
