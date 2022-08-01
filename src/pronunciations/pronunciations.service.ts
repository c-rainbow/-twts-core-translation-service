import { Injectable } from '@nestjs/common';
import { CreatePronunciationDto } from './dto/create-pronunciation.dto';
import { UpdatePronunciationDto } from './dto/update-pronunciation.dto';

@Injectable()
export class PronunciationsService {
  create(createPronunciationDto: CreatePronunciationDto) {
    return 'This action adds a new pronunciation';
  }

  findAll() {
    return `This action returns all pronunciations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pronunciation`;
  }

  update(id: number, updatePronunciationDto: UpdatePronunciationDto) {
    return `This action updates a #${id} pronunciation`;
  }

  remove(id: number) {
    return `This action removes a #${id} pronunciation`;
  }
}
