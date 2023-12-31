import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) public repository: Repository<UserEntity>,
  ) {

  }
  create(createUserDto: CreateUserDto) {
    return this.repository.save(createUserDto)
  }

  findAll(query) {
    const { order, page, perPage, sort } = query
    return this.repository.find({ skip: parseInt(perPage) * parseInt(page), take: parseInt(perPage), order: { [sort]: order } })
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update({ id }, { ...updateUserDto })
  }

  remove(id: number) {
    return this.repository.softRemove({ id })
  }
}
