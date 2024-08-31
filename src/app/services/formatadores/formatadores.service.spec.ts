import { TestBed } from '@angular/core/testing';

import { FormatadoresService } from './formatadores.service';

describe('FormatadoresService', () => {
  let service: FormatadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
