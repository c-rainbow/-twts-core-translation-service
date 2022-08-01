import { Module } from '@nestjs/common';
import { ChatTranslateService } from './translate.service';
import { ChatTranslateController } from './translate.controller';

@Module({
  controllers: [ChatTranslateController],
  providers: [ChatTranslateService],
})
export class ChatTranslateModule {}
