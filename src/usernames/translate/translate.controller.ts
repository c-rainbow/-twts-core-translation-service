import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NameTranslateService } from './translate.service';
import { TranslateNameDto } from './dto/create-translate.dto';
import { UpdateTranslateDto } from './dto/update-translate.dto';

@Controller('translate')
export class NameTranslateController {
  constructor(private readonly translateService: NameTranslateService) {}

  @Post()
  translate(@Body() translateDto: TranslateNameDto) {
    return this.translateService.translate(translateDto);
  }
}
