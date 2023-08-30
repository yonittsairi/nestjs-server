import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HobbiesModule } from './hobbies/hobbies.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { HobbyEntity } from './hobbies/entities/hobby.entity';
@Module({
  imports: [HobbiesModule, UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'taskdb.cihq5gyp8tdd.eu-central-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'taskdb123',
      database: 'taskdb',
      schema: 'yonit_tzairi',
      entities: [UserEntity, HobbyEntity],
      synchronize: true,
      logging: true,
      extra: {
        trustServerCertificate: false,
        Encrypt: true,
        IntegratedSecurity: true,
        ssl: {
          rejectUnauthorized: false
        },


      }


    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
