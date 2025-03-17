import { Injectable } from '@nestjs/common';
import { CreateExternalUserDto } from './dto/create-external-user.dto';
import { UpdateExternalUserDto } from './dto/update-external-user.dto';
import axios from 'axios';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class ExternalUsersService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private readonly cacheService: CacheService) {}

  async create(createExternalUserDto: CreateExternalUserDto) {
    const { data } = await axios.post(this.API_URL, createExternalUserDto);
    return data;
  }

  async findAll() {
    const cacheKey = 'backend-developer-test:external-users:all';

    const cacheData = await this.cacheService.get(cacheKey);
    if (cacheData) return cacheData;

    const { data } = await axios.get(this.API_URL);
    await this.cacheService.set(cacheKey, data, 60);
    return data;
  }

  async findOne(id: number) {
    const cacheKey = `backend-developer-test:external-users:${id}`;

    const cacheData = await this.cacheService.get(cacheKey);
    if (cacheData) return cacheData;

    const { data } = await axios.get(`${this.API_URL}/${id}`);
    await this.cacheService.set(cacheKey, data, 60);
    return data;
  }

  async updatePatch(id: number, updateExternalUserDto: UpdateExternalUserDto) {
    const { data } = await axios.patch(
      `${this.API_URL}/${id}`,
      updateExternalUserDto,
    );
    return data;
  }

  async updatePut(id: number, updateExternalUserDto: UpdateExternalUserDto) {
    const { data } = await axios.put(
      `${this.API_URL}/${id}`,
      updateExternalUserDto,
    );
    return data;
  }

  async remove(id: number) {
    const { data } = await axios.delete(`${this.API_URL}/${id}`);
    return data;
  }
}
