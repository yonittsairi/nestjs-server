import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { HobbiesService } from './hobbies.service';
import { CreateHobbyDto } from './dto/create-hobby.dto';


@Controller('hobbies')
export class HobbiesController {
  constructor(private readonly hobbiesService: HobbiesService) { }


  @Post()
  create(@Body() createHobbyDto: CreateHobbyDto) {

    return this.hobbiesService.create(createHobbyDto).catch((e) => {
      {
        throw new HttpException(
          e,
          HttpStatus.BAD_REQUEST,
        );
      }
    });

  }

  @Get()
  findAll() {
    return this.hobbiesService.findAll();
  }


}
