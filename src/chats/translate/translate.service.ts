import { Injectable } from '@nestjs/common';
import { GoogleTranslateService } from '../../external/google-translate/google-translate.service';
import { NameTranslateService } from '../../usernames/translate/translate.service';
import { PronunciationsService } from '../../pronunciations/pronunciations.service';
import { ChatToken, TranslateChatResponse, TranslateNameResponse, UserConfigs } from '@twtts/shared';



@Injectable()
export class ChatTranslateService {
  constructor(
    private readonly nameTranslateService: NameTranslateService,
    private readonly pronunciationsService: PronunciationsService,
    private readonly googleTranslateService: GoogleTranslateService
  ) {}

  // TODO: Accept chatter's display name
  async translate(
    tokens: ChatToken[],
    srcLang: string,
    config?: UserConfigs,
  ): Promise<TranslateChatResponse> {
    const contents = tokens.filter((token) => token.type === 'text').map((token) => token.text);
    const translated = await this.googleTranslateService.translate(
      contents,
      srcLang,
      config,
    );
    
    let index = 0;
    const translatedTokens: ChatToken[] = [];
    for (const token of tokens) {
      if (token.type !== 'text') {
        translatedTokens.push(token);
      } else {
        translatedTokens.push({
          text: translated[index].text,
          type: 'text',
          language: translated[index].destLang,
        });
        index += 1;
      }
    }

    const output: TranslateChatResponse = {
      original: tokens,
      translated: translatedTokens,
      srcLang,
      destLang: 'en',
      //displayName: this.nameTranslateService.translate(),
    }


    return output;
  }
}
