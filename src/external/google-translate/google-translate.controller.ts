import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotImplementedException,
} from '@nestjs/common';
import { GoogleTranslateService } from './google-translate.service';
import { GoogleTranslateTextsDto } from './dto/google-translate-texts';

@Controller('translate/google')
export class GoogleTranslateController {
  constructor(
    private readonly googleTranslateService: GoogleTranslateService,
  ) {}

  @Post()
  translate(@Body() dto: GoogleTranslateTextsDto) {
    //return this.googleTranslateService.translate(dto.fragments, dto.srcLang, dto.config);
    throw new NotImplementedException('Not implemented');
  }
}
