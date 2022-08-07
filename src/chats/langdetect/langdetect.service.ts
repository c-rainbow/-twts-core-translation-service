import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class ChatLangDetectService {
  detectLanguage(text: string) {
    // TODO: Implement this
    return 'auto';
  }
}
