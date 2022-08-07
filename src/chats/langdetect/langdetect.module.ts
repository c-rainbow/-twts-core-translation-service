import { Module } from '@nestjs/common';
import { ChatLangDetectService } from './langdetect.service';

@Module({
  providers: [ChatLangDetectService],
})
export class ChatLangDetectModule {}
