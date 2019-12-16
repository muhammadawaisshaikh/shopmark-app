import { TestBed } from '@angular/core/testing';

import { AllReviewsService } from './all-reviews.service';

describe('AllReviewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllReviewsService = TestBed.get(AllReviewsService);
    expect(service).toBeTruthy();
  });
});
