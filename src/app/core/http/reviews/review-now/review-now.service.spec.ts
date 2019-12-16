import { TestBed } from '@angular/core/testing';

import { ReviewNowService } from './review-now.service';

describe('ReviewNowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewNowService = TestBed.get(ReviewNowService);
    expect(service).toBeTruthy();
  });
});
