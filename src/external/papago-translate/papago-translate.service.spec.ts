import { Test, TestingModule } from '@nestjs/testing';
import { PapagoTranslateService } from './papago-translate.service';

describe('PapagoTranslateService', () => {
  let service: PapagoTranslateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PapagoTranslateService],
    }).compile();

    service = module.get<PapagoTranslateService>(PapagoTranslateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
