import { Module } from '@nestjs/common';
import { EmotesService } from './emotes.service';

@Module({
  providers: [EmotesService],
  exports: [EmotesService],
})
export class EmotesModule {}
