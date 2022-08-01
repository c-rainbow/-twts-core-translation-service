import { Test, TestingModule } from '@nestjs/testing';
import { ChatTranslateService } from './translate.service';

describe('TranslateService', () => {
  let service: ChatTranslateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatTranslateService],
    }).compile();

    service = module.get<ChatTranslateService>(ChatTranslateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
