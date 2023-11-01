import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const getDatabaseConfig = (configService: ConfigService): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    host: configService.get<string>('DB_HOST'), 
    port: configService.get<number>('DB_PORT', 3000), 
    username: configService.get<string>('DB_USERNAME'), 
    password: configService.get<string>('DB_PASSWORD'), 
    database: configService.get<string>('DB_DATABASE'), 
    autoLoadEntities: true,
    synchronize: true,
  };
};

