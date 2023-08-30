import { Injectable } from '@nestjs/common';
import { CreateHobbyDto } from './dto/create-hobby.dto';
import { UpdateHobbyDto } from './dto/update-hobby.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HobbyEntity } from './entities/hobby.entity';

@Injectable()
export class HobbiesService {
  constructor(
    @InjectRepository(HobbyEntity) public repository: Repository<HobbyEntity>,
  ) {

  }
  create(createHobbyDto: CreateHobbyDto) {
    return this.repository.save(createHobbyDto)
  }

  findAll() {
    return this.repository.find()
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, UpdateHobbyDto: UpdateHobbyDto) {
    return this.repository.update({ id }, { ...UpdateHobbyDto })
  }

  remove(id: number) {
    return this.repository.softDelete({ id })
  }
}
