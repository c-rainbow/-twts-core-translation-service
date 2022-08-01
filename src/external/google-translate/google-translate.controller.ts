import { Controller } from '@nestjs/common';
import { GoogleTranslateService } from './google-translate.service';

@Controller('google-translate')
export class GoogleTranslateController {
  constructor(
    private readonly googleTranslateService: GoogleTranslateService,
  ) {}
}
