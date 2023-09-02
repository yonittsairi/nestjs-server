import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.select(ConfigModule).get(ConfigService);
  const port = configService.get('PORT')
  await app.listen(port).then(() => {
    console.log('Server is up! on port:' + port)
  }

  );
}
bootstrap();
