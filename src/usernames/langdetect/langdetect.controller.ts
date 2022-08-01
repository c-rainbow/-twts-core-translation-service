import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NameLangDetectService } from './langdetect.service';
import { DetectNameLangDto } from './dto/create-langdetect.dto';
import { UpdateLangDetectDto } from './dto/update-langdetect.dto';

@Controller('langdetect')
export class NameLangDetectController {
  constructor(private readonly langdetectService: NameLangDetectService) {}

  @Post()
  detectLanguage(@Body() detectLangDto: DetectNameLangDto) {
    return this.langdetectService.detectLanguage(detectLangDto);
  }
}
