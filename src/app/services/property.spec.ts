import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PropertyService } from './property.service';

describe('PropertyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([PropertyService], (service: PropertyService) => {
    expect(service).toBeTruthy();
  }));
});
