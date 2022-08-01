import { Module } from '@nestjs/common';
import { NameLanguageDetectorService } from './name-language-detector.service';
import { NameLanguageDetectorController } from './name-language-detector.controller';

@Module({
  controllers: [NameLanguageDetectorController],
  providers: [NameLanguageDetectorService]
})
export class NameLanguageDetectorModule {}
