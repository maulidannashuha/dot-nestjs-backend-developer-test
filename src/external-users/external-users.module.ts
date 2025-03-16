import { Module } from '@nestjs/common';
import { ExternalUsersService } from './external-users.service';
import { ExternalUsersController } from './external-users.controller';

@Module({
  controllers: [ExternalUsersController],
  providers: [ExternalUsersService],
})
export class ExternalUsersModule {}
