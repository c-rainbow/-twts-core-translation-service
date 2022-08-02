import { Injectable, NotImplementedException } from '@nestjs/common';
import { TranslateNameDto } from './dto/translate-display-name.dto';
import { UserConfigs } from '../../types/config';
import { GoogleTranslateService } from '../../external/google-translate/google-translate.service';

@Injectable()
export class NameTranslateService {
  constructor(private googleTranslateService: GoogleTranslateService) {}

  async translate(displayName: string, srcLang: string, config: UserConfigs) {
    return await this.googleTranslateService.translate(
      [displayName],
      srcLang,
      config,
    );
  }
}
