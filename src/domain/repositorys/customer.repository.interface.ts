import { CustomerEntity } from 'src/infra/database/entities/typeorm/customer.entity';
import { Customer } from '../entities/customer.entity';
import { Injectable } from '@nestjs/common';

export interface CustomerRepositoryInterface {
  createCustomer(customer: Customer): Promise<CustomerEntity>;
  findCustomerById(id: string): Promise<CustomerEntity | null>;
}
