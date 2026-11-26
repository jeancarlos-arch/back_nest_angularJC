import { ConfigService } from '../config/config.service.js';
import { DataSource } from 'typeorm';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION_POSTGRES',
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: config.get('HOST') || 'localhost',
        port: +config.get('PORT_BD'),
        username: config.get('USERNAME') || 'root',
        password: config.get('PASSWORD') || 'prueba',
        database: config.get('DATABASE'),
        entities: [join(__dirname, '..', '**', '*.entity{.ts,.js}')],
      });

      return dataSource.initialize();
    },
  },
];