import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';
dotenv.config();
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [join(__dirname, 'entities', 'typeorm', '*.{ts,js}')],
  migrations: [join(__dirname, 'migrations', '*.{ts,js}')],
  synchronize: false,
});
