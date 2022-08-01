import { Test, TestingModule } from '@nestjs/testing';
import { LangDetectService } from './langdetect.service';

describe('LangDetectService', () => {
  let service: LangDetectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LangDetectService],
    }).compile();

    service = module.get<LangDetectService>(LangDetectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
