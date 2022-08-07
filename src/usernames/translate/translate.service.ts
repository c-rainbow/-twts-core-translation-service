import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  NotImplementedException,
} from '@nestjs/common';
import { UserConfigs } from '../../types/config';
import { GoogleTranslateService } from '../../external/google-translate/google-translate.service';
import { Cache } from 'cache-manager';
import { NameTranslationOutput, TranslationResult } from '../../types/translate';
import { PronunciationsService } from '../../pronunciations/pronunciations.service';

@Injectable()
export class NameTranslateService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private googleTranslateService: GoogleTranslateService,
    private pronunciationsService: PronunciationsService,
  ) {}

  async translate(
    displayName: string,
    srcLang: string,
    config: UserConfigs,
  ): Promise<NameTranslationOutput> {
    const cached = await this.cacheManager.get<NameTranslationOutput>(displayName);
    if (cached) {
      return cached;
    }
    const results = await this.googleTranslateService.translate(
      [displayName],
      srcLang,
      config,
    );
    const translated = results[0];
    const output: NameTranslationOutput = {
      original: displayName,
      translated: translated.text,
      srcLang: translated.srcLang,
      destLang: translated.destLang,
      pronunciation: {
        text: displayName,
        pinyin: this.pronunciationsService.getPinyin(displayName),
        romaji: await this.pronunciationsService.getRomaji(displayName),
      }
    };

    await this.cacheManager.set<NameTranslationOutput>(displayName, output);
    return output;
  }
}
