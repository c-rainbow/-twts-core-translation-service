import { Test, TestingModule } from '@nestjs/testing';
import { NameLanguageDetectorController } from './name-language-detector.controller';
import { NameLanguageDetectorService } from './name-language-detector.service';

describe('NameLanguageDetectorController', () => {
  let controller: NameLanguageDetectorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NameLanguageDetectorController],
      providers: [NameLanguageDetectorService],
    }).compile();

    controller = module.get<NameLanguageDetectorController>(NameLanguageDetectorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
