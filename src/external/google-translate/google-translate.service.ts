import { Injectable } from '@nestjs/common';
import { CreateGoogleTranslateDto } from './dto/create-google-translate.dto';
import { UpdateGoogleTranslateDto } from './dto/update-google-translate.dto';

@Injectable()
export class GoogleTranslateService {
  create(createGoogleTranslateDto: CreateGoogleTranslateDto) {
    return 'This action adds a new googleTranslate';
  }

  findAll() {
    return `This action returns all googleTranslate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} googleTranslate`;
  }

  update(id: number, updateGoogleTranslateDto: UpdateGoogleTranslateDto) {
    return `This action updates a #${id} googleTranslate`;
  }

  remove(id: number) {
    return `This action removes a #${id} googleTranslate`;
  }
}
