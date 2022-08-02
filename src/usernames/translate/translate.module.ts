import { CacheModule, Module } from '@nestjs/common';
import { NameTranslateService } from './translate.service';
import { NameTranslateController } from './translate.controller';
import { GoogleTranslateModule } from '../../external/google-translate/google-translate.module';

@Module({
  imports: [CacheModule.register({ max: 1000 }), GoogleTranslateModule],
  controllers: [NameTranslateController],
  providers: [NameTranslateService],
})
export class NameTranslateModule {}
