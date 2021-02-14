import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ServerConfig } from './models/server-config.model';
import { CorsConfig } from './models/cors-config.model';
import * as config from 'config';

const bootstrap: () => Promise<void> = async (): Promise<void> => {
  const app: INestApplication = await NestFactory.create(AppModule);
  const logger: Logger = new Logger('bootstrap');
  const serverConfig: ServerConfig = config.get('server');
  const port: number = Number(process.env.PORT) || serverConfig.port;
  const cors: CorsConfig = config.get('cors');

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ ...cors });

  await app.listen(port);
  logger.log(`Application is running on port ${port}`);
};
bootstrap();
