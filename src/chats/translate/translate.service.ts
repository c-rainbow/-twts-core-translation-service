import { Injectable, NotImplementedException } from '@nestjs/common';
import { TranslateFragmentsDto } from './dto/translate-fragments.dto';
import { GoogleTranslateService } from '../../external/google-translate/google-translate.service';

@Injectable()
export class ChatTranslateService {

  constructor(private googleTranslateService: GoogleTranslateService) {}

  async translate(dto: TranslateFragmentsDto) {
    return this.googleTranslateService.translate(dto);
  }
}
