import { Controller, Post, Body, Get } from '@nestjs/common';
import { NameTranslateService } from './translate.service';
import { TranslateNameDto } from './dto/translate-display-name.dto';

@Controller('translate')
export class NameTranslateController {
  constructor(private readonly translateService: NameTranslateService) {}

  @Post('name')
  async translate(@Body() dto: TranslateNameDto) {
    return this.translateService.translate(dto.displayName, dto.configs);
  }
}
