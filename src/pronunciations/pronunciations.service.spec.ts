import { Test, TestingModule } from '@nestjs/testing';
import { PronunciationsService } from './pronunciations.service';

describe('PronunciationsService', () => {
  let service: PronunciationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PronunciationsService],
    }).compile();

    service = module.get<PronunciationsService>(PronunciationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
