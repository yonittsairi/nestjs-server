import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { HobbyEntity } from '../hobbies/hobby.entity.js';
import { UserEntity } from '../user/user.entity.js';

export default class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      retryAttempts: 5,
      host: configService.get('DB_HOST'),
      port: configService.get('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      schema: configService.get('DB_SCHEMA'),
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
    }
  }
}
export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
  inject: [ConfigService]
}