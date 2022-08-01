import { Injectable, NotImplementedException } from '@nestjs/common';
import { PapagoTranslateTextsDto } from './dto/papago-translate-texts.dto';

@Injectable()
export class PapagoTranslateService {
  translate(translateDto: PapagoTranslateTextsDto) {
    throw new NotImplementedException('Not implemented');
  }
}
