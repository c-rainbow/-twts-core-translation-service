import { Test, TestingModule } from '@nestjs/testing';
import { FragmentsTranslatorService } from './fragments-translator.service';

describe('FragmentsTranslatorService', () => {
  let service: FragmentsTranslatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FragmentsTranslatorService],
    }).compile();

    service = module.get<FragmentsTranslatorService>(
      FragmentsTranslatorService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
