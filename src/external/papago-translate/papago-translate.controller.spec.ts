import { Test, TestingModule } from '@nestjs/testing';
import { PapagoTranslateController } from './papago-translate.controller';
import { PapagoTranslateService } from './papago-translate.service';

describe('PapagoTranslateController', () => {
  let controller: PapagoTranslateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PapagoTranslateController],
      providers: [PapagoTranslateService],
    }).compile();

    controller = module.get<PapagoTranslateController>(
      PapagoTranslateController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
