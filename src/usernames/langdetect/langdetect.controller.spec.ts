import { Test, TestingModule } from '@nestjs/testing';
import { NameLangDetectController } from './langdetect.controller';
import { NameLangDetectService } from './langdetect.service';

describe('LangDetectController', () => {
  let controller: NameLangDetectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NameLangDetectController],
      providers: [NameLangDetectService],
    }).compile();

    controller = module.get<NameLangDetectController>(NameLangDetectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
