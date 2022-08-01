import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateEmoteDto } from './dto/create-emote.dto';
import { UpdateEmoteDto } from './dto/update-emote.dto';

@Injectable()
export class EmotesService {
  getEmote(channelId: string, word: string) {
    throw new NotImplementedException('Not implemented');
  }
}
