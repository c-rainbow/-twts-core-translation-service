import { Module } from '@nestjs/common';
import { ChatTranslateService } from './translate.service';
import { ChatTranslateController } from './translate.controller';
import { GoogleTranslateModule } from '../../external/google-translate/google-translate.module';
import { ChatFragmentsModule } from '../fragments/fragments.module';
import { NameTranslateModule } from '../../usernames/translate/translate.module';
import { PronunciationsModule } from '../../pronunciations/pronunciations.module';
import { ChatLangDetectModule } from '../langdetect/langdetect.module';

@Module({
  imports: [ChatFragmentsModule, GoogleTranslateModule, NameTranslateModule, PronunciationsModule, ChatLangDetectModule],
  controllers: [ChatTranslateController],
  providers: [ChatTranslateService],
})
export class ChatTranslateModule {}
