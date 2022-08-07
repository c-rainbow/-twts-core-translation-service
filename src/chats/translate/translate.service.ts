import { Injectable, NotImplementedException } from '@nestjs/common';
import { GoogleTranslateService } from '../../external/google-translate/google-translate.service';
import { ChatFragment } from '../../types/fragments';
import { UserConfigs } from '../../types/config';
import { NameTranslationOutput } from '../../types/translate';
import { NameTranslateService } from '../../usernames/translate/translate.service';
import { PronunciationsService } from '../../pronunciations/pronunciations.service';


type ChatTranslationOutput = {
	original: ChatFragment[];  // Fragments of the original chat message.
  translated?: ChatFragment[];  // Translated chat message. Undefined if not translated
  srcLang: string;  // Source language
  destLang: string;  // Target language
	displayName?: NameTranslationOutput;  // Translated display name, if translated
}

@Injectable()
export class ChatTranslateService {
  constructor(
    private readonly nameTranslateService: NameTranslateService,
    private readonly pronunciationsService: PronunciationsService,
    private readonly googleTranslateService: GoogleTranslateService
  ) {}

  async translate(
    fragments: ChatFragment[],
    srcLang: string,
    config?: UserConfigs,
  ): Promise<ChatTranslationOutput> {
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
          language: translated[index].destLang,
          // TODO: get pronunciation
        });
        index += 1;
      }
    }

    const output: ChatTranslationOutput = {
      original: fragments,
      translated: translatedFragments,
      srcLang,
      destLang: 'en',
      //displayName: this.nameTranslateService.translate()
    }


    return output;
  }
}
