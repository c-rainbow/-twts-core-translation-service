import { Injectable, NotImplementedException } from '@nestjs/common';
import { TranslateFragmentsDto } from './dto/translate-fragments.dto';
import { GoogleTranslateService } from '../../external/google-translate/google-translate.service';
import { ChatFragment } from '../../types/fragments';

@Injectable()
export class ChatTranslateService {
  constructor(private googleTranslateService: GoogleTranslateService) {}

  async translate(dto: TranslateFragmentsDto) {
    const contents = dto.fragments
      .filter((fragment) => fragment.type === 'text')
      .map((fragment) => fragment.text);
    const translated = await this.googleTranslateService.translate(
      contents,
      dto.srcLang,
      dto.config,
    );
    let index = 0;
    const translatedFragments: ChatFragment[] = [];
    for (const fragment of dto.fragments) {
      if (fragment.type !== 'text') {
        translatedFragments.push(fragment);
      }
      else {
        translatedFragments.push({
          text: translated[index].text,
          type: 'text',
          language: translated[index].targetLang,
          // TODO: get pronunciation
        })
        index += 1;
      }
    }
    return translatedFragments;
  }
}
