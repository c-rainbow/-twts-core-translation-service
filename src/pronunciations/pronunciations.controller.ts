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

  @Post('pinyin')
  getPinyin(@Body() getPinyinDto: GetPinyinDto) {
    return this.pronunciationsService.getPinyin(getPinyinDto);
  }

  @Post('romaji')
  getRomaji(@Body() dto: GetRomajiDto) {
    return this.pronunciationsService.getRomaji(dto);
  }

  @Post('hanja')
  getHanja(@Body() dto: GetHanjaDto) {
    return this.pronunciationsService.getHanja(dto);
  }
}
