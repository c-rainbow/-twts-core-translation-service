import { Module } from '@nestjs/common';
import { ChatTranslateService } from './translate.service';
import { ChatTranslateController } from './translate.controller';
import { GoogleTranslateModule } from '../../external/google-translate/google-translate.module';
import { ChatFragmentsModule } from '../fragments/fragments.module';

@Module({
  imports: [ChatFragmentsModule, GoogleTranslateModule],
  controllers: [ChatTranslateController],
  providers: [ChatTranslateService],
})
export class ChatTranslateModule {}
