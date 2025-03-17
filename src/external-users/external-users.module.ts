import { Module } from '@nestjs/common';
import { ExternalUsersService } from './external-users.service';
import { ExternalUsersController } from './external-users.controller';
import { CacheModule } from 'src/cache/cache.module';

@Module({
  imports: [CacheModule],
  controllers: [ExternalUsersController],
  providers: [ExternalUsersService],
})
export class ExternalUsersModule {}
