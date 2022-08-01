import { Injectable } from '@nestjs/common';
import { CreateFragmentsTranslatorDto } from './dto/create-fragments-translator.dto';
import { UpdateFragmentsTranslatorDto } from './dto/update-fragments-translator.dto';

@Injectable()
export class FragmentsTranslatorService {
  create(createFragmentsTranslatorDto: CreateFragmentsTranslatorDto) {
    return 'This action adds a new fragmentsTranslator';
  }

  findAll() {
    return `This action returns all fragmentsTranslator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fragmentsTranslator`;
  }

  update(
    id: number,
    updateFragmentsTranslatorDto: UpdateFragmentsTranslatorDto,
  ) {
    return `This action updates a #${id} fragmentsTranslator`;
  }

  remove(id: number) {
    return `This action removes a #${id} fragmentsTranslator`;
  }
}
