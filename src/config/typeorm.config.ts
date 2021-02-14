import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
import { DbConfig } from '../models/db-config.models';

const dbConfig: DbConfig = config.get('db');
const {
  type,
  host,
  port,
  database,
  username,
  password,
  autoLoadEntities,
  synchronize,
} = dbConfig;

export const typeOrmConfig: TypeOrmModuleOptions & DbConfig = {
  type: type,
  host: process.env.RDS_HOSTNAME || host,
  port: Number(process.env.RDS_PORT) || port,
  database: process.env.RDS_DB_NAME || database,
  username: process.env.RDS_USERNAME || username,
  password: process.env.RDS_PASSWORD || password,
  autoLoadEntities: autoLoadEntities,
  synchronize: `${process.env.TYPEORM_SYNC}` === 'true' || synchronize,
};
