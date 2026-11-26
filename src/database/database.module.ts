import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { databaseProvider } from './database.providers.js';
import { ConfigService } from '../config/config.service.js';
import { ConfigModule } from '../config/config.module.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('HOST') || 'localhost',
        port: +config.get('PORT'),
        username: config.get('USERNAME') || 'root',
        password: config.get('PASSWORD') || 'prueba',
        database: config.get('DATABASE'),
        entities: [join(__dirname, '..', '**', '*.entity{.ts,.js}')],
      }),
    }),
  ],
  providers: [...databaseProvider, ConfigService],
  exports: [...databaseProvider],
})
export class DatabaseModule {}