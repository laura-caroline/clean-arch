import { Customer } from 'src/domain/entities/customer.entity';
import { CustomerRepositoryInterface } from 'src/domain/repositorys/customer.repository.interface';
import { CustomerEntity } from 'src/infra/database/models/typeorm/customer.model';
import { CreateCustomerDto } from 'src/presentation/dto/create-customer.dto';
import { v4 as uuid } from 'uuid';

export class CreateCustomerUseCase {
  constructor(
    private readonly customerRepository: CustomerRepositoryInterface,
  ) {}

  async execute(body: CreateCustomerDto): Promise<CustomerEntity> {
    const customer = new Customer(uuid(), body.name);
    customer.changeStatusCustomer(body.active);

    const newCustomer = await this.customerRepository.createCustomer(customer);

    return newCustomer;
  }
}
