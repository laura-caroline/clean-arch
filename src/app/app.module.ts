import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { CustomerModule } from './customer.module';
import { join } from 'path';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        join(
          __dirname,
          '..',
          'infra',
          'database',
          'entities',
          'typeorm',
          '*.{ts,js}',
        ),
      ],
      migrations: [
        join(__dirname, '..', 'infra', 'database', 'migrations', '*.{ts,js}'),
      ],
      synchronize: false,
    }),
    CustomerModule,
  ],
})
export class AppModule {}
