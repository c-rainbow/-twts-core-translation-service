import { Injectable, NotImplementedException } from '@nestjs/common';
import { TranslateNameDto } from './dto/create-translate.dto';
import { UpdateTranslateDto } from './dto/update-translate.dto';

@Injectable()
export class NameTranslateService {
  translate(translateDto: TranslateNameDto) {
    throw new NotImplementedException('Not Implemented');
  }
}
