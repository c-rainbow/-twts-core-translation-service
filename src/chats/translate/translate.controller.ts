import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChatTranslateService as ChatTranslateService } from './translate.service';
import { CreateTranslateDto } from './dto/create-translate.dto';

@Controller('chats/translate')
export class ChatTranslateController {
  constructor(private readonly translateService: ChatTranslateService) {}

  @Post()
  translate(@Body() createTranslateDto: CreateTranslateDto) {
    return this.translateService.translate(createTranslateDto);
  }
}
