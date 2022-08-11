import { Module } from '@nestjs/common';
import { ChatLangDetectService } from './langdetect.service';

@Module({
  providers: [ChatLangDetectService],
  exports: [ChatLangDetectService],
})
export class ChatLangDetectModule {}
