import { Module } from '@nestjs/common';
import { NameTranslatorService } from './name-translator.service';
import { NameTranslatorController } from './name-translator.controller';

@Module({
  controllers: [NameTranslatorController],
  providers: [NameTranslatorService],
})
export class NameTranslatorModule {}
