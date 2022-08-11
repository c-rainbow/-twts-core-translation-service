import { Module } from '@nestjs/common';
import { NameLangDetectService } from './langdetect.service';
import { NameLangDetectController } from './langdetect.controller';

@Module({
  controllers: [NameLangDetectController],
  providers: [NameLangDetectService],
  exports: [NameLangDetectService],
})
export class NameLangDetectModule {}
