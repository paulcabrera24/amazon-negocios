import { TestBed } from '@angular/core/testing';

import { TablaregistroService } from './tablaregistro.service';

describe('TablaregistroService', () => {
  let service: TablaregistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaregistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
