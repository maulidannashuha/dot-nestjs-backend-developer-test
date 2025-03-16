import { Test, TestingModule } from '@nestjs/testing';
import { ExternalUsersController } from './external-users.controller';
import { ExternalUsersService } from './external-users.service';

describe('ExternalUsersController', () => {
  let controller: ExternalUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExternalUsersController],
      providers: [ExternalUsersService],
    }).compile();

    controller = module.get<ExternalUsersController>(ExternalUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
