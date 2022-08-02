import { Controller, Post, Body, Get } from '@nestjs/common';
import { NameTranslateService } from './translate.service';
import { TranslateNameDto } from './dto/translate-display-name.dto';

@Controller('translate')
export class NameTranslateController {
  constructor(private readonly translateService: NameTranslateService) {}

  @Post()
  async translate(@Body() dto: TranslateNameDto) {
    return this.translateService.translate(
      dto.displayName,
      dto.srcLang,
      dto.config,
    );
  }

  @Get()
  async translate2() {
    return this.translateService.translate('봄날의햇살', 'auto', {
      defaultTargetLang: 'en',
    });
  }
}
