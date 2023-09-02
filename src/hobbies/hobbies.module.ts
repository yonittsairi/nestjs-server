import { Module } from '@nestjs/common';
import { HobbiesService } from './hobbies.service';
import { HobbiesController } from './hobbies.controller';
import { HobbyEntity } from './hobby.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HobbyEntity])],
  controllers: [HobbiesController],
  providers: [HobbiesService],
})
export class HobbiesModule { }
