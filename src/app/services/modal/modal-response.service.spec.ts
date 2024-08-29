import { TestBed } from '@angular/core/testing';

import { ModalResponseService } from './modal-response.service';

describe('ModalResponseService', () => {
  let service: ModalResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
