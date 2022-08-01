import { Module } from '@nestjs/common';
import { LangDetectService } from './langdetect.service';
import { LangDetectController } from './langdetect.controller';

@Module({
  controllers: [LangDetectController],
  providers: [LangDetectService]
})
export class ChatLangDetectModule {}
