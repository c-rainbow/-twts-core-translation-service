import { Test, TestingModule } from '@nestjs/testing';
import { FragmentsClassifierController } from './fragments-classifier.controller';
import { FragmentsClassifierService } from './fragments-classifier.service';

describe('FragmentsClassifierController', () => {
  let controller: FragmentsClassifierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FragmentsClassifierController],
      providers: [FragmentsClassifierService],
    }).compile();

    controller = module.get<FragmentsClassifierController>(
      FragmentsClassifierController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
