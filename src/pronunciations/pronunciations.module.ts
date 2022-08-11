import { Module } from '@nestjs/common';
import { PronunciationsService } from './pronunciations.service';

@Module({
  providers: [PronunciationsService],
  exports: [PronunciationsService],
})
export class PronunciationsModule {}
