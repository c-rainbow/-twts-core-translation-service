import { Injectable, NotImplementedException } from '@nestjs/common';
import { DetectChatLangDto } from './dto/detect-chat-lang.dto';

@Injectable()
export class ChatLangDetectService {
  detect(detectChatLangDto: DetectChatLangDto) {
    throw new NotImplementedException('Not implemented');
  }
}
