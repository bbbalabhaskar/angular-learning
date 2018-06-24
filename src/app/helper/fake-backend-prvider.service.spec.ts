import { TestBed, inject } from '@angular/core/testing';

import { FakeBackendPrviderService } from './fake-backend-prvider.service';

describe('FakeBackendPrviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeBackendPrviderService]
    });
  });

  it('should be created', inject([FakeBackendPrviderService], (service: FakeBackendPrviderService) => {
    expect(service).toBeTruthy();
  }));
});
