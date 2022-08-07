import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PronunciationsService } from './pronunciations.service';
import { GetPinyinDto } from './dto/get-pinyin.dto';
import { GetRomajiDto } from './dto/get-romaji.dto';
import { GetHanjaDto } from './dto/get-hanja.dto';

@Controller('pronunciations')
export class PronunciationsController {
  constructor(private readonly pronunciationsService: PronunciationsService) {}

  @Get('pinyin')
  getPinyin(@Body() dto: GetPinyinDto) {
    return this.pronunciationsService.getPinyin(dto.text);
  }

  @Get('romaji')
  getRomaji(@Body() dto: GetRomajiDto) {
    return this.pronunciationsService.getRomaji(dto.text);
  }

  @Get('hanja')
  getHanja(@Body() dto: GetHanjaDto) {
    return this.pronunciationsService.getHanja(dto);
  }
}
