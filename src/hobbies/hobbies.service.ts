import { Injectable } from '@nestjs/common';
import { CreateHobbyDto } from './dto/create-hobby.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HobbyEntity } from './entities/hobby.entity';
import { resolve } from 'path';
import { rejects } from 'assert';

@Injectable()
export class HobbiesService {
  constructor(
    @InjectRepository(HobbyEntity) public repository: Repository<HobbyEntity>,
  ) {

  }
  create(createHobbyDto: CreateHobbyDto) {
    return new Promise((resolve, reject) => {
      this.repository.findOne({ where: createHobbyDto }).then(
        (res) => {
          if (!res) {
            resolve(this.repository.save(createHobbyDto))
          }
          reject('Hobby already exists')
        }
      )
    })


  }

  findAll() {
    return this.repository.find()
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

}
