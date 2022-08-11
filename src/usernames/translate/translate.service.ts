import {
  CACHE_MANAGER,
  Inject,
  Injectable,
} from '@nestjs/common';
import { GoogleTranslateService } from '../../external/google-translate/google-translate.service';
import { Cache } from 'cache-manager';
import { PronunciationsService } from '../../pronunciations/pronunciations.service';
import { TranslateNameResponse, UserConfigs } from '@twtts/shared';

@Injectable()
export class NameTranslateService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private googleTranslateService: GoogleTranslateService,
    private pronunciationsService: PronunciationsService,
  ) {}

  async translate(
    displayName: string,
    configs: UserConfigs,
  ): Promise<TranslateNameResponse> {
    const cached = await this.cacheManager.get<TranslateNameResponse>(displayName);
    if (cached) {
      return cached;
    }
    const results = await this.googleTranslateService.translate(
      [displayName],
      'auto',
      configs,
    );
    const translated = results[0];
    const output: TranslateNameResponse = {
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

    await this.cacheManager.set<TranslateNameResponse>(displayName, output);
    return output;
  }
}
