import { Test, TestingModule } from '@nestjs/testing';
import { FragmentsTranslatorController } from './fragments-translator.controller';
import { FragmentsTranslatorService } from './fragments-translator.service';

describe('FragmentsTranslatorController', () => {
  let controller: FragmentsTranslatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FragmentsTranslatorController],
      providers: [FragmentsTranslatorService],
    }).compile();

    controller = module.get<FragmentsTranslatorController>(FragmentsTranslatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
