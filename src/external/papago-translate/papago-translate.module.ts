import { Module } from '@nestjs/common';
import { PapagoTranslateService } from './papago-translate.service';
import { PapagoTranslateController } from './papago-translate.controller';

@Module({
  controllers: [PapagoTranslateController],
  providers: [PapagoTranslateService],
})
export class PapagoTranslateModule {}
