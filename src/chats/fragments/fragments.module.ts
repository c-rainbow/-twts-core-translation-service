import { Module } from '@nestjs/common';
import { FragmentsService } from './fragments.service';
import { FragmentsController } from './fragments.controller';
import { EmotesModule } from 'src/external/emotes/emotes.module';

@Module({
  imports: [EmotesModule],
  controllers: [FragmentsController],
  providers: [FragmentsService],
})
export class ChatFragmentsModule {}
