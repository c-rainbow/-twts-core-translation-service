import { Module } from '@nestjs/common';
import { EmotesService } from './emotes.service';

@Module({
  imports: [EmotesService],
  providers: [EmotesService],
  exports: [EmotesService],
})
export class EmotesModule {}
