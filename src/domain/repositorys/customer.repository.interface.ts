import { CustomerEntity } from 'src/infra/database/models/typeorm/customer.model';
import { Customer } from '../entities/customer.entity';

export interface CustomerRepositoryInterface {
  createCustomer(customer: Customer): Promise<CustomerEntity>;
  findCustomerById(id: string): Promise<CustomerEntity | null>;
}
