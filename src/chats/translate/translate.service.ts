import { Injectable, NotImplementedException } from '@nestjs/common';
import { GoogleTranslateService } from '../../external/google-translate/google-translate.service';
import { ChatFragment } from '../../types/fragments';
import { UserConfigs } from '../../types/config';

@Injectable()
export class ChatTranslateService {
  constructor(private googleTranslateService: GoogleTranslateService) {}

  async translate(fragments: ChatFragment[], srcLang: string, config?: UserConfigs) {
    const contents = fragments
      .filter((fragment) => fragment.type === 'text')
      .map((fragment) => fragment.text);
    const translated = await this.googleTranslateService.translate(
      contents,
      srcLang,
      config,
    );
    console.log('translated: ', translated);
    let index = 0;
    const translatedFragments: ChatFragment[] = [];
    for (const fragment of fragments) {
      if (fragment.type !== 'text') {
        translatedFragments.push(fragment);
      } else {
        translatedFragments.push({
          text: translated[index].text,
          type: 'text',
          language: translated[index].targetLang,
          // TODO: get pronunciation
        });
        index += 1;
      }
    }
    return translatedFragments;
  }
}
