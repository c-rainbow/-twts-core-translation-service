import { Test, TestingModule } from '@nestjs/testing';
import { EmotesService } from '../../external/emotes/emotes.service';
import { FragmentsService } from './fragments.service';
import { createMock } from '@golevelup/ts-jest';
import { EmoteChecker } from '@twtts/shared';


describe('FragmentsService', () => {
  let service: FragmentsService;
  let emotesService: EmotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FragmentsService],
    })
    .useMocker(() => createMock())
    .compile();

    service = module.get<FragmentsService>(FragmentsService);
    emotesService = module.get<EmotesService>(EmotesService);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
    jest.spyOn(emotesService, 'getEmoteChecker').mockImplementation(() => new EmoteChecker('1', 'message'));
    const result = await service.tokenize('1234', 'test', {});
    console.log('result', result);
  });

  //it('should ')
});
