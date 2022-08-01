import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateTranslateDto } from './dto/create-translate.dto';

@Injectable()
export class ChatTranslateService {
  translate(createTranslateDto: CreateTranslateDto) {
    throw new NotImplementedException('Not implemented');
  }
}
