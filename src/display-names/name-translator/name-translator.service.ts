import { Injectable } from '@nestjs/common';
import { CreateNameTranslatorDto } from './dto/create-name-translator.dto';
import { UpdateNameTranslatorDto } from './dto/update-name-translator.dto';

@Injectable()
export class NameTranslatorService {
  create(createNameTranslatorDto: CreateNameTranslatorDto) {
    return 'This action adds a new nameTranslator';
  }

  findAll() {
    return `This action returns all nameTranslator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nameTranslator`;
  }

  update(id: number, updateNameTranslatorDto: UpdateNameTranslatorDto) {
    return `This action updates a #${id} nameTranslator`;
  }

  remove(id: number) {
    return `This action removes a #${id} nameTranslator`;
  }
}
