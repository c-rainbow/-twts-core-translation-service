import { Controller, Post, Body } from '@nestjs/common';
import { ChatTranslateService as ChatTranslateService } from './translate.service';
import { TranslateFragmentsDto } from './dto/translate-fragments.dto';

@Controller('chats/translate')
export class ChatTranslateController {
  constructor(private readonly translateService: ChatTranslateService) {}

  @Post()
  translate(@Body() createTranslateDto: TranslateFragmentsDto) {
    return this.translateService.translate(createTranslateDto);
  }
}
