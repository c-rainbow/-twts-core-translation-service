import { Test, TestingModule } from '@nestjs/testing';
import { ChatLangDetectController } from './langdetect.controller';
import { ChatLangDetectService } from './langdetect.service';

describe('LangDetectController', () => {
  let controller: ChatLangDetectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatLangDetectController],
      providers: [ChatLangDetectService],
    }).compile();

    controller = module.get<ChatLangDetectController>(ChatLangDetectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
