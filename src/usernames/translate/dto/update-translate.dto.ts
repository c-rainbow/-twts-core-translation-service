import { PartialType } from '@nestjs/mapped-types';
import { TranslateNameDto } from './create-translate.dto';

export class UpdateTranslateDto extends PartialType(TranslateNameDto) {}
