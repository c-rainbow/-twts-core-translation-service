import { Module } from '@nestjs/common';
import { EmotesService } from './emotes.service';
import { EmotesController } from './emotes.controller';

@Module({
  controllers: [EmotesController],
  providers: [EmotesService],
  exports: [EmotesService]
})
export class EmotesModule {}
