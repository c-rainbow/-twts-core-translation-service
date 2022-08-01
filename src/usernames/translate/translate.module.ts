import { Module } from '@nestjs/common';
import { NameTranslateService } from './translate.service';
import { NameTranslateController } from './translate.controller';

@Module({
  controllers: [NameTranslateController],
  providers: [NameTranslateService],
})
export class NameTranslateModule {}
