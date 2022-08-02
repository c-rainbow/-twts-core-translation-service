import { Controller, Post, Body, Get } from '@nestjs/common';
import { ChatTranslateService as ChatTranslateService } from './translate.service';
import { TranslateFragmentsDto } from './dto/translate-fragments.dto';
import { ChatFragment } from '../../types/fragments';

@Controller('chats/translate')
export class ChatTranslateController {
  constructor(private readonly translateService: ChatTranslateService) {}

  @Post()
  translate(@Body() dto: TranslateFragmentsDto) {
    return this.translateService.translate(
      dto.fragments,
      dto.srcLang,
      dto.config,
    );
  }

  @Get()
  translate2() {
    const fragments: ChatFragment[] = [
      { type: 'text', text: '안녕하세요' },
      { type: 'mention', text: '@hahaha' },
      {
        type: 'emote',
        text: 'Clap',
        emote: {
          provider: '7tv',
          id: '603cb71c73d7a5001441f995',
          name: 'Clap',
          url: 'https://cdn.7tv.app/emote/603cb71c73d7a5001441f995/1x',
        },
      },
      { type: 'text', text: '이건 한글 번역 테스트용이에요' },
      { type: 'link', text: 'https://www.google.com' },
      { type: 'text', text: 'ㅇㅇ' },
    ];
    return this.translateService.translate(fragments, 'auto', {
      defaultTargetLang: 'en',
    });
  }
}
