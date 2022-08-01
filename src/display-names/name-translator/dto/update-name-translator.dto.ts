import { PartialType } from '@nestjs/mapped-types';
import { CreateNameTranslatorDto } from './create-name-translator.dto';

export class UpdateNameTranslatorDto extends PartialType(
  CreateNameTranslatorDto,
) {}
