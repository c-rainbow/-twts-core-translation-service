import { Test, TestingModule } from '@nestjs/testing';
import { ChatTranslateController } from './translate.controller';
import { ChatTranslateService } from './translate.service';

describe('TranslateController', () => {
  let controller: ChatTranslateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatTranslateController],
      providers: [ChatTranslateService],
    }).compile();

    controller = module.get<ChatTranslateController>(ChatTranslateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
