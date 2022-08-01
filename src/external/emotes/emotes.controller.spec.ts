import { Test, TestingModule } from '@nestjs/testing';
import { EmotesController } from './emotes.controller';
import { EmotesService } from './emotes.service';

describe('EmotesController', () => {
  let controller: EmotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmotesController],
      providers: [EmotesService],
    }).compile();

    controller = module.get<EmotesController>(EmotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
