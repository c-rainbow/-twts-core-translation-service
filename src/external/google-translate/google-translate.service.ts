import { TranslationServiceClient } from '@google-cloud/translate';
import { Injectable } from '@nestjs/common';
import { UserConfigs } from '@twtts/shared';
import { TranslationResult } from '../../types/translate';

@Injectable()
export class GoogleTranslateService {
  private _projectId: string;
  private _client: TranslationServiceClient;

  constructor() {
    // TODO: Use config service, and not directly access process.env
    this._projectId = process.env.GCP_TRANSLATION_PROJECT_ID;
    if (process.env.GCP_TRANSLATION_KEY_FILE) {
      this._client = new TranslationServiceClient({
        projectId: this._projectId,
        keyFile: process.env.GCP_TRANSLATION_KEY_FILE,
      });
    }
    else {
      this._client = new TranslationServiceClient();
    }
  }

  async translate(
    contents: string[],
    srcLang: string,
    configs: UserConfigs,
  ): Promise<TranslationResult[]> {
    if (!contents.length) {
      return [];
    }

    const results = await this._client.translateText({
      parent: `projects/${this._projectId}`,
      mimeType: 'text/plain',
      contents,
      // sourceLanguageCode: srcLang,  // TODO: use the source lang config
      targetLanguageCode: configs.defaultTargetLang,
    });
    const response = results[0];
    const translations = response.translations;

    return translations.map((translation) => ({
      text: translation.translatedText,
      srcLang: translation.detectedLanguageCode,
      destLang: configs.defaultTargetLang,
    }));
  }
}
