import { Controller } from '@nestjs/common';
import { PapagoTranslateService } from './papago-translate.service';

@Controller('papago-translate')
export class PapagoTranslateController {
  constructor(
    private readonly papagoTranslateService: PapagoTranslateService,
  ) {}
}
