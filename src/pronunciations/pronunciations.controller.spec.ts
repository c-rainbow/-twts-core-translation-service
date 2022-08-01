import { Test, TestingModule } from '@nestjs/testing';
import { PronunciationsController } from './pronunciations.controller';
import { PronunciationsService } from './pronunciations.service';

describe('PronunciationsController', () => {
  let controller: PronunciationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PronunciationsController],
      providers: [PronunciationsService],
    }).compile();

    controller = module.get<PronunciationsController>(PronunciationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
