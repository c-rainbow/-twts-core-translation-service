import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmotesService } from './emotes.service';
import { CreateEmoteDto } from './dto/create-emote.dto';
import { UpdateEmoteDto } from './dto/update-emote.dto';

@Controller('emotes')
export class EmotesController {
  constructor(private readonly emotesService: EmotesService) {}

  @Get(':channelId/:word')
  getEmote(@Param('channelId') channelId: string, @Param('word') word: string) {
    return this.emotesService.getEmote(channelId, word);
  }
}
