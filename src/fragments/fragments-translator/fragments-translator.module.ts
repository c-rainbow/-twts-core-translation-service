import { Module } from '@nestjs/common';
import { FragmentsTranslatorService } from './fragments-translator.service';
import { FragmentsTranslatorController } from './fragments-translator.controller';

@Module({
  controllers: [FragmentsTranslatorController],
  providers: [FragmentsTranslatorService],
})
export class FragmentsTranslatorModule {}
