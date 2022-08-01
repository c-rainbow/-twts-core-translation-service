import { Test, TestingModule } from '@nestjs/testing';
import { NameTranslatorService } from './name-translator.service';

describe('NameTranslatorService', () => {
  let service: NameTranslatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NameTranslatorService],
    }).compile();

    service = module.get<NameTranslatorService>(NameTranslatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
