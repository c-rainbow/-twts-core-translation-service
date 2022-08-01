import { Injectable, NotImplementedException } from '@nestjs/common';
import { GetHanjaDto } from './dto/get-hanja.dto';
import { GetRomajiDto } from './dto/get-romaji.dto';
import { GetPinyinDto } from './dto/get-pinyin.dto';

@Injectable()
export class PronunciationsService {
  getPinyin(dto: GetPinyinDto) {
    throw new NotImplementedException('Not implemented');
  }

  getRomaji(dto: GetRomajiDto) {
    throw new NotImplementedException('Not implemented');
  }

  getHanja(dto: GetHanjaDto) {
    throw new NotImplementedException('Not implemented');
  }
}
