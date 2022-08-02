import { Injectable } from '@nestjs/common';
import { DetectNameLangDto } from './dto/detect-name-lang.dto';

@Injectable()
export class NameLangDetectService {
  detectLanguage(detectLangDto: DetectNameLangDto) {
    return 'auto';
  }
}
