import { Module } from '@nestjs/common';
import { FragmentsClassifierService } from './fragments-classifier.service';
import { FragmentsClassifierController } from './fragments-classifier.controller';

@Module({
  controllers: [FragmentsClassifierController],
  providers: [FragmentsClassifierService]
})
export class FragmentsClassifierModule {}
