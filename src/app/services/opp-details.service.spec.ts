import { TestBed } from '@angular/core/testing';

import { OppDetailsService } from './opp-details.service';

describe('OppDetailsService', () => {
  let service: OppDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OppDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
