import { Injectable } from '@nestjs/common';
import { CreateNameLanguageDetectorDto } from './dto/create-name-language-detector.dto';
import { UpdateNameLanguageDetectorDto } from './dto/update-name-language-detector.dto';

@Injectable()
export class NameLanguageDetectorService {
  create(createNameLanguageDetectorDto: CreateNameLanguageDetectorDto) {
    return 'This action adds a new nameLanguageDetector';
  }

  findAll() {
    return `This action returns all nameLanguageDetector`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nameLanguageDetector`;
  }

  update(id: number, updateNameLanguageDetectorDto: UpdateNameLanguageDetectorDto) {
    return `This action updates a #${id} nameLanguageDetector`;
  }

  remove(id: number) {
    return `This action removes a #${id} nameLanguageDetector`;
  }
}
