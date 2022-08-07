import { Injectable, NotImplementedException } from '@nestjs/common';
import { GetHanjaDto } from './dto/get-hanja.dto';
import { GetRomajiDto } from './dto/get-romaji.dto';
import { GetPinyinDto } from './dto/get-pinyin.dto';
import { pinyin } from 'pinyin-pro';
import Kuroshiro from 'kuroshiro';
import * as KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';

@Injectable()
export class PronunciationsService {
  private _kuroshiro: Kuroshiro;

  constructor() {
    this._kuroshiro = new Kuroshiro();
    const analyzer = new KuromojiAnalyzer();
    this._kuroshiro.init(analyzer);
  }

  getPinyin(text: string) {
    //throw new NotImplementedException('Not implemented');
    return pinyin(text);
  }

  async getRomaji(text: string): Promise<string> {
    const result: string = await this._kuroshiro.convert(
      text,
      { to: 'romaji', romajiSystem: 'passport', mode: 'spaced' },
    );
    console.log('romaji:', result);
    return result;
  }

  getHanja(dto: GetHanjaDto) {
    throw new NotImplementedException('Not implemented');
  }
}
