import { Test, TestingModule } from '@nestjs/testing';
import { EmotesFetcher } from './emotes-fetcher';

describe('EmotesFetcher', () => {
  let provider: EmotesFetcher;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmotesFetcher],
    }).compile();

    provider = module.get<EmotesFetcher>(EmotesFetcher);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
