import { Test, TestingModule } from '@nestjs/testing';
import { NameTranslatorController } from './name-translator.controller';
import { NameTranslatorService } from './name-translator.service';

describe('NameTranslatorController', () => {
  let controller: NameTranslatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NameTranslatorController],
      providers: [NameTranslatorService],
    }).compile();

    controller = module.get<NameTranslatorController>(NameTranslatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
