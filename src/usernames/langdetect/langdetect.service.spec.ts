import { Test, TestingModule } from '@nestjs/testing';
import { NameLangDetectService } from './langdetect.service';

describe('NameLangDetectService', () => {
  let service: NameLangDetectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NameLangDetectService],
    }).compile();

    service = module.get<NameLangDetectService>(NameLangDetectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
