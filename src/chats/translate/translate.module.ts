import { Module } from '@nestjs/common';
import { ChatTranslateService } from './translate.service';
import { ChatTranslateController } from './translate.controller';
import { GoogleTranslateModule } from '../../external/google-translate/google-translate.module';

@Module({
  imports: [GoogleTranslateModule],
  controllers: [ChatTranslateController],
  providers: [ChatTranslateService],
})
export class ChatTranslateModule {}
