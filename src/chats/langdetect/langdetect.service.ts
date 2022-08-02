import { Injectable, NotImplementedException } from '@nestjs/common';
import { DetectChatLangDto } from './dto/detect-chat-lang.dto';

@Injectable()
export class ChatLangDetectService {
  detectLanguage(detectChatLangDto: DetectChatLangDto) {
    // TODO: Implement this
    return 'auto';
  }
}
