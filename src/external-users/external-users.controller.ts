import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ExternalUsersService } from './external-users.service';
import { CreateExternalUserDto } from './dto/create-external-user.dto';
import { UpdateExternalUserDto } from './dto/update-external-user.dto';

@Controller('external-users')
export class ExternalUsersController {
  constructor(private readonly externalUsersService: ExternalUsersService) {}

  @Post()
  create(@Body() createExternalUserDto: CreateExternalUserDto) {
    return this.externalUsersService.create(createExternalUserDto);
  }

  @Get()
  findAll() {
    return this.externalUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.externalUsersService.findOne(+id);
  }

  @Patch(':id')
  updatePatch(
    @Param('id') id: string,
    @Body() updateExternalUserDto: UpdateExternalUserDto,
  ) {
    return this.externalUsersService.updatePatch(+id, updateExternalUserDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateExternalUserDto: UpdateExternalUserDto,
  ) {
    return this.externalUsersService.updatePut(+id, updateExternalUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.externalUsersService.remove(+id);

    return undefined;
  }
}
