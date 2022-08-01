import { Module } from '@nestjs/common';
import { EmotesService } from './emotes.service';
import { EmotesController } from './emotes.controller';
import { EmotesFetcher } from './emotes-fetcher';

@Module({
  controllers: [EmotesController],
  providers: [EmotesService, EmotesFetcher],
  exports: [EmotesService],
})
export class EmotesModule {}
