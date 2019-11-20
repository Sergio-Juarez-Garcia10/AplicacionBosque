import { TestBed } from '@angular/core/testing';

import { UsuariosFBService } from './usuarios-fb.service';

describe('UsuariosFBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuariosFBService = TestBed.get(UsuariosFBService);
    expect(service).toBeTruthy();
  });
});
