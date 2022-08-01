import { PartialType } from '@nestjs/mapped-types';
import { DetectNameLangDto } from './create-langdetect.dto';

export class UpdateLangDetectDto extends PartialType(DetectNameLangDto) {}
