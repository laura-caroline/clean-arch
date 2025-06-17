import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/infra/database/entities/typeorm/customer.entity';
import { CustomerRepository } from 'src/infra/database/repositorys/typeorm/customer.repository';
import { CustomerController } from 'src/presentation/controllers/customer.controller';
import { CreateCustomerUseCase } from 'src/usecases/customer/create/create-customer.usecase';

@Module({
  controllers: [CustomerController],
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
  providers: [
    CreateCustomerUseCase,
    {
      provide: 'CustomerRepositoryInterface',
      useClass: CustomerRepository,
    },
  ],
})
export class CustomerModule {}
