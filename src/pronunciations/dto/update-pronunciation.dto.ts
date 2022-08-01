import { PartialType } from '@nestjs/mapped-types';
import { CreatePronunciationDto } from './create-pronunciation.dto';

export class UpdatePronunciationDto extends PartialType(
  CreatePronunciationDto,
) {}
