import { CacheModule, Module } from '@nestjs/common';
import { NameTranslateService } from './translate.service';
import { NameTranslateController } from './translate.controller';
import { GoogleTranslateModule } from '../../external/google-translate/google-translate.module';
import { PronunciationsService } from '../../pronunciations/pronunciations.service';
import { NameLangDetectModule } from '../langdetect/langdetect.module';

@Module({
  imports: [
    CacheModule.register({ max: 1000 }),
    GoogleTranslateModule,
    NameLangDetectModule,
  ],
  controllers: [NameTranslateController],
  providers: [NameTranslateService, PronunciationsService],
  exports: [NameTranslateService],
})
export class NameTranslateModule {}
