import { Module } from '@nestjs/common';
import { FragmentsService } from './fragments.service';
import { EmotesModule } from '../../external/emotes/emotes.module';

@Module({
  imports: [EmotesModule],
  providers: [FragmentsService],
  exports: [FragmentsService],
})
export class ChatFragmentsModule {}
