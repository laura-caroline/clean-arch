import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerRepositoryInterface } from 'src/domain/repositorys/customer.repository.interface';
import { Customer } from 'src/domain/entities/customer.entity';
import { CustomerEntity } from '../../models/typeorm/customer.model';

@Injectable()
export class CustomerRepository implements CustomerRepositoryInterface {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepository: Repository<CustomerEntity>,
  ) {}

  async createCustomer(customer: Customer): Promise<CustomerEntity> {
    const customerCreate = await this.customerRepository.create({
      name: customer.name,
      active: customer.active,
      products: customer.products.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        active: product.active,
        customer: { id: customer.id },
      })),
    });
    const saved = await this.customerRepository.save(customerCreate);
    return saved;
  }

  async findCustomerById(id: string): Promise<CustomerEntity | null> {
    return await this.customerRepository.findOne({
      where: { id },
      relations: ['products'],
    });
  }
}
