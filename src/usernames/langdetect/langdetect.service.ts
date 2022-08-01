import { Injectable } from '@nestjs/common';
import { DetectNameLangDto } from './dto/create-langdetect.dto';
import { UpdateLangDetectDto } from './dto/update-langdetect.dto';

@Injectable()
export class NameLangDetectService {
  detectLanguage(detectLangDto: DetectNameLangDto) {
    return 'This action adds a new langdetect';
  }
}
