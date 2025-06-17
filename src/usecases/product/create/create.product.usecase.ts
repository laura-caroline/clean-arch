import { BadRequestException } from '@nestjs/common';
import { Customer } from 'src/domain/entities/customer.entity';
import { Product } from 'src/domain/entities/product.entity';
import { CustomerRepositoryInterface } from 'src/domain/repositorys/customer.repository.interface';
import { ProductRepositoryInterface } from 'src/domain/repositorys/product.repository.interface';
import { ProductEntity } from 'src/infra/database/entities/typeorm/product.entity';
import { CreateProductDto } from 'src/presentation/dto/create-product.dto';

export class CreateProductUseCase {
  constructor(
    private readonly productRepository: ProductRepositoryInterface,
    private readonly customerRepository: CustomerRepositoryInterface,
  ) {}

  async execute(body: CreateProductDto): Promise<ProductEntity> {
    const customerExists = await this.customerRepository.findCustomerById(
      body.customerId,
    );

    if (!customerExists) {
      throw new BadRequestException(
        `Customer with ID ${body.customerId} not found`,
      );
    }
    const product = new Product(
      body.name,
      new Customer(customerExists.id, customerExists.name),
    );
    product.changePriceProduct(body.price);
    const newProduct = await this.productRepository.createProduct(product);

    return newProduct;
  }
}
