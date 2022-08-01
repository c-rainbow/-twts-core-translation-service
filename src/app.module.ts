import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TranslationsModule } from './translations/translations.module';
import { FragmentsTranslatorModule } from './fragments-translator/fragments-translator.module';
import { FragmentsClassifierModule } from './fragments-classifier/fragments-classifier.module';

@Module({
  imports: [TranslationsModule, FragmentsTranslatorModule, FragmentsClassifierModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
