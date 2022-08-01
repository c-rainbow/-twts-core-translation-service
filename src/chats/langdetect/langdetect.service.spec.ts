import { Test, TestingModule } from '@nestjs/testing';
import { ChatLangDetectService } from './langdetect.service';

describe('LangDetectService', () => {
  let service: ChatLangDetectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatLangDetectService],
    }).compile();

    service = module.get<ChatLangDetectService>(ChatLangDetectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
