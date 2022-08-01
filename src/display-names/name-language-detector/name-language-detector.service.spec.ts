import { Test, TestingModule } from '@nestjs/testing';
import { NameLanguageDetectorService } from './name-language-detector.service';

describe('NameLanguageDetectorService', () => {
  let service: NameLanguageDetectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NameLanguageDetectorService],
    }).compile();

    service = module.get<NameLanguageDetectorService>(NameLanguageDetectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
