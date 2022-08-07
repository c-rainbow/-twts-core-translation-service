import { Controller, Post, Body } from '@nestjs/common';
import { ChatTranslateService as ChatTranslateService } from './translate.service';
import { TranslateFragmentsDto } from './dto/translate-fragments.dto';


@Controller('translate/chat')
export class ChatTranslateController {
  constructor(private readonly chatTranslateService: ChatTranslateService) {}

  @Post()
  translateFragments(@Body() dto: TranslateFragmentsDto) {
    return this.chatTranslateService.translate(
      dto.fragments,
      dto.srcLang,
      dto.config,
    );
  }
}
