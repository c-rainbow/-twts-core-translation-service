import { Module } from '@nestjs/common';
import { ChatLangDetectService } from './langdetect.service';
import { ChatLangDetectController } from './langdetect.controller';

@Module({
  controllers: [ChatLangDetectController],
  providers: [ChatLangDetectService],
})
export class ChatLangDetectModule {}
