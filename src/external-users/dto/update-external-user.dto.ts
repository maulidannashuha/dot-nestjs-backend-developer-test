import { PartialType } from '@nestjs/mapped-types';
import { CreateExternalUserDto } from './create-external-user.dto';

export class UpdateExternalUserDto extends PartialType(CreateExternalUserDto) {}
