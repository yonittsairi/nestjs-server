import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HobbiesModule } from './hobbies/hobbies.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeOrm.config';
;
@Module({
  imports: [HobbiesModule, UserModule,
    TypeOrmModule.forRootAsync(typeOrmConfigAsync)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
