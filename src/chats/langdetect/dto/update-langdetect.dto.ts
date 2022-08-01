import { PartialType } from '@nestjs/mapped-types';
import { CreateLangDetectDto } from './create-langdetect.dto';

export class UpdateLangDetectDto extends PartialType(CreateLangDetectDto) {}
