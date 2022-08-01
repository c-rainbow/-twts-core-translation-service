import { Module } from '@nestjs/common';
import { PronunciationsService } from './pronunciations.service';
import { PronunciationsController } from './pronunciations.controller';

@Module({
  controllers: [PronunciationsController],
  providers: [PronunciationsService],
})
export class PronunciationsModule {}
