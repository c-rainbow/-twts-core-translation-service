import { Injectable } from '@nestjs/common';
import { DetectNameLangDto } from './dto/detect-name-lang.dto';

@Injectable()
export class NameLangDetectService {
  detectLanguage(displayName: string) {
    if (this.isKorean(displayName)) {
      return 'ko';
    }

    // The username may be Japanese if it has hiragana or katakana.
    if (this.isJapanese(displayName) && !this.isChinese(displayName)) {
      return 'ja';
    }

    return 'auto';
  }

  isAscii(name: string) {
    return /^[a-zA-Z0-9_]+$/.test(name);
  }

  isKorean(name: string) {
    return /^[\u3130-\u318F\uAC00-\uD7A30-9_]+$/.test(name);
  }

  isChinese(name: string) {
    return /^[\u4E00-\u9FA5\uF900-\uFA2D0-9_]+$/.test(name);
  }

  isJapanese(name: string) {
    return /^[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF\u2605-\u2606\u2190-\u2195\u203B0-9_]+$/.test(name);
  }
}
