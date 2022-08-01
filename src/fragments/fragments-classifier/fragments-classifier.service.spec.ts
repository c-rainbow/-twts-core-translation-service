import { Test, TestingModule } from '@nestjs/testing';
import { FragmentsClassifierService } from './fragments-classifier.service';

describe('FragmentsClassifierService', () => {
  let service: FragmentsClassifierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FragmentsClassifierService],
    }).compile();

    service = module.get<FragmentsClassifierService>(
      FragmentsClassifierService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
