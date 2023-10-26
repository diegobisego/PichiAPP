import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getDatabaseConfig = (): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    host: 'localhost',
    port: 3000,
    username: 'root',
    password: '',
    database: 'pichi',
    autoLoadEntities: true,
    synchronize: true,
  };
};
