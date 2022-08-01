import { Injectable } from '@nestjs/common';
import { CreateLangDetectDto } from './dto/create-langdetect.dto';
import { UpdateLangDetectDto } from './dto/update-langdetect.dto';

@Injectable()
export class NameLangDetectService {
  create(createLangDetectDto: CreateLangDetectDto) {
    return 'This action adds a new langdetect';
  }

  findAll() {
    return `This action returns all langdetect`;
  }

  findOne(id: number) {
    return `This action returns a #${id} langdetect`;
  }

  update(id: number, updateLangDetectDto: UpdateLangDetectDto) {
    return `This action updates a #${id} langdetect`;
  }

  remove(id: number) {
    return `This action removes a #${id} langdetect`;
  }
}
