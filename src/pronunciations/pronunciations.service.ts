import { Injectable, NotImplementedException } from '@nestjs/common';
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
    return pinyin(text);
  }

  async getRomaji(text: string): Promise<string> {
    const result: string = await this._kuroshiro.convert(text, {
      to: 'romaji',
      romajiSystem: 'passport',
      mode: 'spaced',
    });
    return result;
  }

  getHanja(text: string) {
    throw new NotImplementedException('Not implemented');
  }
}
