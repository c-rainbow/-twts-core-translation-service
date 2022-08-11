import { Controller, Post, Body } from '@nestjs/common';
import { ChatTranslateService as ChatTranslateService } from './translate.service';
import { TranslateChatDto } from './dto/translate-fragments.dto';


@Controller('translate')
export class ChatTranslateController {
  constructor(private readonly chatTranslateService: ChatTranslateService) {}

  @Post('chat')
  translateFragments(@Body() dto: TranslateChatDto) {
    return this.chatTranslateService.translate(
      dto.tokens,
      dto.displayName,
      dto.configs,
    );
  }
}
