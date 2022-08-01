import { Injectable } from '@nestjs/common';
import { CreateEmoteDto } from './dto/create-emote.dto';
import { UpdateEmoteDto } from './dto/update-emote.dto';

@Injectable()
export class EmotesService {
  create(createEmoteDto: CreateEmoteDto) {
    return 'This action adds a new emote';
  }

  findAll() {
    return `This action returns all emotes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emote`;
  }

  update(id: number, updateEmoteDto: UpdateEmoteDto) {
    return `This action updates a #${id} emote`;
  }

  remove(id: number) {
    return `This action removes a #${id} emote`;
  }
}
