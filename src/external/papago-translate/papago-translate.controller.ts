import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PapagoTranslateService } from './papago-translate.service';
import { PapagoTranslateTextsDto } from './dto/papago-translate-texts.dto';

@Controller('translate/papapgo')
export class PapagoTranslateController {
  constructor(
    private readonly papagoTranslateService: PapagoTranslateService,
  ) {}

  @Post()
  translate(@Body() translateDto: PapagoTranslateTextsDto) {
    return this.papagoTranslateService.translate(translateDto);
  }
}
