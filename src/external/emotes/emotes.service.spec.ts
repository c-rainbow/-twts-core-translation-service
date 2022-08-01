import { Test, TestingModule } from '@nestjs/testing';
import { EmotesService } from './emotes.service';

describe('EmotesService', () => {
  let service: EmotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmotesService],
    }).compile();

    service = module.get<EmotesService>(EmotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
