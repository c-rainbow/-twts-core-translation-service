import { Module } from '@nestjs/common';
import { EmotesService } from './emotes.service';
import { EmotesController } from './emotes.controller';

@Module({
  controllers: [EmotesController],
  providers: [EmotesService]
})
export class EmotesModule {}
