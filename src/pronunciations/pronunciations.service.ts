import { Injectable, NotImplementedException } from '@nestjs/common';
import { GetHanjaDto } from './dto/get-hanja.dto';
import { GetRomajiDto } from './dto/get-romaji.dto';
import { GetPinyinDto } from './dto/get-pinyin.dto';
import { pinyin } from 'pinyin-pro';
import Kuroshiro from 'kuroshiro';
import * as KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";


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
    return pinyin("안녕中心11234中心ss아");
  }

  getRomaji(dto: GetRomajiDto) {
    return this._kuroshiro.convert(
      '感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！',
      { to: 'romaji', romajiSystem: 'passport', mode: 'spaced'});
  }

  getHanja(dto: GetHanjaDto) {
    throw new NotImplementedException('Not implemented');
  }
}
