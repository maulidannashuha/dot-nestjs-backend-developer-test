import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExternalUsersModule } from './external-users/external-users.module';

@Module({
  imports: [ExternalUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
