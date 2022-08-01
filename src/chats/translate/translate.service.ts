import { Injectable, NotImplementedException } from '@nestjs/common';
import { TranslateFragmentsDto } from './dto/translate-fragments.dto';

@Injectable()
export class ChatTranslateService {
  translate(translateDto: TranslateFragmentsDto) {
    throw new NotImplementedException('Not implemented');
  }
}
