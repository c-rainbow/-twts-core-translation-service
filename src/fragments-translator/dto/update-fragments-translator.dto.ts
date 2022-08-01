import { PartialType } from '@nestjs/mapped-types';
import { CreateFragmentsTranslatorDto } from './create-fragments-translator.dto';

export class UpdateFragmentsTranslatorDto extends PartialType(CreateFragmentsTranslatorDto) {}
