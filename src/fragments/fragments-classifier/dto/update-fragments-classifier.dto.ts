import { PartialType } from '@nestjs/mapped-types';
import { CreateFragmentsClassifierDto } from './create-fragments-classifier.dto';

export class UpdateFragmentsClassifierDto extends PartialType(
  CreateFragmentsClassifierDto,
) {}
