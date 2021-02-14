type TypeOrmModuleOptionsType = 'postgres';

export interface DbConfig {
  type: TypeOrmModuleOptionsType;
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  autoLoadEntities: boolean;
  synchronize: boolean;
}
