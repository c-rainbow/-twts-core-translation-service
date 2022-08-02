import { TranslationServiceClient } from '@google-cloud/translate';
import { Injectable, NotImplementedException } from '@nestjs/common';
import { ChatFragment } from '../../types/fragments';
import { UserConfigs } from '../../types/config';

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

  async translate(contents: string[], srcLang: string, config: UserConfigs) {
    const results = await this._client.translateText({
      parent: `projects/${this._projectId}`,
      contents,
      //sourceLanguageCode: 'en',  // TODO: use the source lang config
      targetLanguageCode: 'en',
    });
    const response = results[0];
    const translations = response.translations;

    return translations.map((translation) => ({
      text: translation.translatedText,
      srcLang: translation.detectedLanguageCode,
      targetLang: 'en',  // TODO: do not hardcode
    }));
  }
}
