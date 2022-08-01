import { Test, TestingModule } from '@nestjs/testing';
import { NameTranslateService } from './translate.service';

describe('TranslateService', () => {
  let service: NameTranslateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NameTranslateService],
    }).compile();

    service = module.get<NameTranslateService>(NameTranslateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
