import { Controller, Post, Body } from '@nestjs/common';
import { NameLangDetectService } from './langdetect.service';
import { DetectNameLangDto } from './dto/detect-name-lang.dto';

@Controller('langdetect')
export class NameLangDetectController {
  constructor(private readonly langdetectService: NameLangDetectService) {}

  @Post()
  detectLanguage(@Body() dto: DetectNameLangDto) {
    return this.langdetectService.detectLanguage(dto.displayName);
  }
}
