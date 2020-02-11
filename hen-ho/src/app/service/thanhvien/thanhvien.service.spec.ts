import { TestBed } from '@angular/core/testing';

import { ThanhvienService } from './thanhvien.service';

describe('ThanhvienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThanhvienService = TestBed.get(ThanhvienService);
    expect(service).toBeTruthy();
  });
});
