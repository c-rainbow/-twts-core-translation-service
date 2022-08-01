import { Test, TestingModule } from '@nestjs/testing';
import { LangDetectController } from './langdetect.controller';
import { LangDetectService } from './langdetect.service';

describe('LangDetectController', () => {
  let controller: LangDetectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LangDetectController],
      providers: [LangDetectService],
    }).compile();

    controller = module.get<LangDetectController>(LangDetectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
