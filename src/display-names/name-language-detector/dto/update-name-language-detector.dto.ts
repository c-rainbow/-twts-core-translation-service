import { PartialType } from '@nestjs/mapped-types';
import { CreateNameLanguageDetectorDto } from './create-name-language-detector.dto';

export class UpdateNameLanguageDetectorDto extends PartialType(
  CreateNameLanguageDetectorDto,
) {}
