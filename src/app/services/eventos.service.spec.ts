import { TestBed } from '@angular/core/testing';

import { EventosService } from './eventos.service';

describe('EventoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventoService = TestBed.get(EventoService);
    expect(service).toBeTruthy();
  });
});
