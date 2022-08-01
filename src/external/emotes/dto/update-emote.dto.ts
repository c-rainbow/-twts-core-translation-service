import { PartialType } from '@nestjs/mapped-types';
import { CreateEmoteDto } from './create-emote.dto';

export class UpdateEmoteDto extends PartialType(CreateEmoteDto) {}
