import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TranslationsModule } from './translations/translations.module';
import { FragmentsTranslatorModule } from './fragments/fragments-translator/fragments-translator.module';
import { FragmentsClassifierModule } from './fragments/fragments-classifier/fragments-classifier.module';
import { NameLanguageDetectorModule } from './display-names/name-language-detector/name-language-detector.module';
import { NameTranslatorModule } from './display-names/name-translator/name-translator.module';
import { PronunciationsModule } from './pronunciations/pronunciations.module';
import { EmotesModule } from './external/emotes/emotes.module';
import { GoogleTranslateModule } from './external/google-translate/google-translate.module';
import { PapagoTranslateModule } from './external/papago-translate/papago-translate.module';

@Module({
  imports: [
    TranslationsModule,
    FragmentsTranslatorModule,
    FragmentsClassifierModule,
    NameLanguageDetectorModule,
    NameTranslatorModule,
    PronunciationsModule,
    EmotesModule,
    GoogleTranslateModule,
    PapagoTranslateModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
