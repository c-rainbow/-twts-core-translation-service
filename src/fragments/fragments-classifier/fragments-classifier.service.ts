import { Injectable } from '@nestjs/common';
import { CreateFragmentsClassifierDto } from './dto/create-fragments-classifier.dto';
import { UpdateFragmentsClassifierDto } from './dto/update-fragments-classifier.dto';

@Injectable()
export class FragmentsClassifierService {
  create(createFragmentsClassifierDto: CreateFragmentsClassifierDto) {
    return 'This action adds a new fragmentsClassifier';
  }

  findAll() {
    return `This action returns all fragmentsClassifier`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fragmentsClassifier`;
  }

  update(id: number, updateFragmentsClassifierDto: UpdateFragmentsClassifierDto) {
    return `This action updates a #${id} fragmentsClassifier`;
  }

  remove(id: number) {
    return `This action removes a #${id} fragmentsClassifier`;
  }
}
