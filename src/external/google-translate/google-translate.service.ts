import { TranslationServiceClient } from '@google-cloud/translate';
import { Injectable } from '@nestjs/common';
import { UserConfigs } from '@twtts/shared';
import { TranslationResult } from '../../types/translate';

@Injectable()
export class GoogleTranslateService {
  private _projectId: string;
  private _client: TranslationServiceClient;

  constructor() {
    this._projectId = process.env.GCP_TRANSLATION_PROJECT_ID;
    this._client = new TranslationServiceClient({
      projectId: this._projectId,
      keyFile: process.env.GCP_TRANSLATION_KEY_FILE,
    });
  }

  async translate(
    contents: string[],
    srcLang: string,
    configs: UserConfigs,
  ): Promise<TranslationResult[]> {
    if (contents === []) {
      return [];
    }

    const results = await this._client.translateText({
      parent: `projects/${this._projectId}`,
      contents,
      sourceLanguageCode: srcLang,  // TODO: use the source lang config
      //targetLanguageCode: config.defaultTargetLang,
      targetLanguageCode: 'en',
    });
    const response = results[0];
    const translations = response.translations;

    return translations.map((translation) => ({
      text: translation.translatedText,
      srcLang: translation.detectedLanguageCode,
      destLang: 'en',//config.defaultTargetLang,
    }));
  }
}
