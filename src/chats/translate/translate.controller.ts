import { Controller, Post, Body } from '@nestjs/common';
import { ChatTranslateService as ChatTranslateService } from './translate.service';
import { TranslateFragmentsDto } from './dto/translate-fragments.dto';

@Controller('chats/translate')
export class ChatTranslateController {
  constructor(private readonly translateService: ChatTranslateService) {}

  @Post()
  translate(@Body() dto: TranslateFragmentsDto) {
    return this.translateService.translate(dto);
  }
}
