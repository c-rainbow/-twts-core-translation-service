import { Injectable, NotImplementedException } from '@nestjs/common';
import { GoogleTranslateTextsDto } from './dto/google-translate-texts';

@Injectable()
export class GoogleTranslateService {
  translate(translateDto: GoogleTranslateTextsDto) {
    throw new NotImplementedException('Not implemented');
  }
}
