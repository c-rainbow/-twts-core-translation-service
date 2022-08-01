import { Test, TestingModule } from '@nestjs/testing';
import { NameTranslateController } from './translate.controller';
import { NameTranslateService } from './translate.service';

describe('TranslateController', () => {
  let controller: NameTranslateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NameTranslateController],
      providers: [NameTranslateService],
    }).compile();

    controller = module.get<NameTranslateController>(NameTranslateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
