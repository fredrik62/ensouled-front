import { TestBed, inject } from '@angular/core/testing';

import { GetOneSkillService } from './get-one-skill.service';

describe('GetOneSkillService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetOneSkillService]
    });
  });

  it('should be created', inject([GetOneSkillService], (service: GetOneSkillService) => {
    expect(service).toBeTruthy();
  }));
});
