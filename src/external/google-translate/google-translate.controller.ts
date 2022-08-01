import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GoogleTranslateService } from './google-translate.service';
import { GoogleTranslateTextsDto } from './dto/google-translate-texts';

@Controller('translate/google')
export class GoogleTranslateController {
  constructor(
    private readonly googleTranslateService: GoogleTranslateService,
  ) {}

  @Post()
  translate(@Body() translateDto: GoogleTranslateTextsDto) {
    return this.googleTranslateService.translate(translateDto);
  }
}
