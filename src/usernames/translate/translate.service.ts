import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  NotImplementedException,
} from '@nestjs/common';
import { UserConfigs } from '../../types/config';
import { GoogleTranslateService } from '../../external/google-translate/google-translate.service';
import { Cache } from 'cache-manager';
import { TranslationResult } from '../../types/translate';

@Injectable()
export class NameTranslateService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private googleTranslateService: GoogleTranslateService,
  ) {}

  async translate(
    displayName: string,
    srcLang: string,
    config: UserConfigs,
  ): Promise<TranslationResult> {
    const cached = await this.cacheManager.get<TranslationResult>(displayName);
    if (cached) {
      return cached;
    }
    const results = await this.googleTranslateService.translate(
      [displayName],
      srcLang,
      config,
    );
    const translated = results[0];
    await this.cacheManager.set<TranslationResult>(displayName, translated);
    return translated;
  }
}
