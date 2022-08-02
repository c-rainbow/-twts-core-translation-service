import { TranslationServiceClient } from '@google-cloud/translate';
import { Injectable, NotImplementedException } from '@nestjs/common';
import { GoogleTranslateTextsDto } from './dto/google-translate-texts';

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

  async translate(dto: GoogleTranslateTextsDto) {
    // TODO: for now, concatenate all words and translate them as one chunk.
    const contents = [dto.fragments
      .filter(fragment => fragment.type === 'text')
      .map(fragment => fragment.text)
      .join(' ')];
    const results = await this._client.translateText({
      parent: `projects/${this._projectId}`,
      contents,
      //sourceLanguageCode: 'en',  // TODO: use the source lang config
      targetLanguageCode: 'en',
    });
    const translation = results[0].translations[0];

    return {
      text: translation.translatedText,
      sourceLang: translation.detectedLanguageCode,
      targetLang: 'en'
    }
  }
}
