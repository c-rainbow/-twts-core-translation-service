import { Controller, Post, Body } from '@nestjs/common';
import { ChatLangDetectService } from './langdetect.service';
import { DetectChatLangDto } from './dto/detect-chat-lang.dto';

@Controller('/chats/langdetect')
export class ChatLangDetectController {
  constructor(private readonly langdetectService: ChatLangDetectService) {}

  @Post()
  detect(@Body() detectChatLangDto: DetectChatLangDto) {
    return this.langdetectService.detectLanguage(detectChatLangDto);
  }
}
