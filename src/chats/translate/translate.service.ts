import { Injectable } from '@nestjs/common';
import { GoogleTranslateService } from '../../external/google-translate/google-translate.service';
import { NameTranslateService } from '../../usernames/translate/translate.service';
import { PronunciationsService } from '../../pronunciations/pronunciations.service';
import { ChatToken, TranslateChatResponse, TranslateNameResponse, UserConfigs } from '@twtts/shared';
import { ChatLangDetectService } from '../langdetect/langdetect.service';



@Injectable()
export class ChatTranslateService {
  constructor(
    private readonly chatLangDetectService: ChatLangDetectService,
    private readonly nameTranslateService: NameTranslateService,
    private readonly pronunciationsService: PronunciationsService,
    private readonly googleTranslateService: GoogleTranslateService
  ) {}

  // TODO: Accept chatter's display name
  async translate(
    originalTokens: ChatToken[],
    displayName: string,
    configs: UserConfigs,
  ): Promise<TranslateChatResponse> {
    // Get text parts of the chat
    const contents = originalTokens.filter(
      (token) => token.type === 'text').map((token) => token.text);
    // Detect the language. Currently always 'auto'
    const detectedSrcLang = this.chatLangDetectService.detectLanguage(contents.join(' '));
    // Translate using Google Translate
    const translated = await this.googleTranslateService.translate(
      contents,
      detectedSrcLang,
      configs,
    );
    
    let index = 0;
    const translatedTokens: ChatToken[] = [];
    for (const token of originalTokens) {
      if (token.type !== 'text') {
        translatedTokens.push(token);
      } else {
        /**
         * For now, it is necessary to modify the input to add its language
         * because the source language is detected as a part of translation.
         */
        token.language = translated[index].srcLang;

        translatedTokens.push({
          text: translated[index].text,
          type: 'text',
          language: translated[index].destLang,
        });
        index += 1;
      }
    }

    const output: TranslateChatResponse = {
      original: originalTokens,
      translated: translatedTokens,
      srcLang: 'auto',
      destLang: configs.defaultTargetLang,
      displayName: await this.nameTranslateService.translate(displayName, configs),
    }


    return output;
  }
}
