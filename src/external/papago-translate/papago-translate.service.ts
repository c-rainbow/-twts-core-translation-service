import { Injectable } from '@nestjs/common';
import { CreatePapagoTranslateDto } from './dto/create-papago-translate.dto';
import { UpdatePapagoTranslateDto } from './dto/update-papago-translate.dto';

@Injectable()
export class PapagoTranslateService {
  create(createPapagoTranslateDto: CreatePapagoTranslateDto) {
    return 'This action adds a new papagoTranslate';
  }

  findAll() {
    return `This action returns all papagoTranslate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} papagoTranslate`;
  }

  update(id: number, updatePapagoTranslateDto: UpdatePapagoTranslateDto) {
    return `This action updates a #${id} papagoTranslate`;
  }

  remove(id: number) {
    return `This action removes a #${id} papagoTranslate`;
  }
}
