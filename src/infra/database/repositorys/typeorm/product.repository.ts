import { Product } from 'src/domain/entities/product.entity';
import { ProductRepositoryInterface } from 'src/domain/repositorys/product.repository.interface';
import { ProductEntity } from '../../entities/typeorm/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class ProductRepository implements ProductRepositoryInterface {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}
  async createProduct(product: Product): Promise<ProductEntity> {
    const productCreate = await this.productRepository.create({
      name: product.name,
      price: product.price,
      active: product.active,
      customer: { id: product.customer.id },
    });
    return await this.productRepository.save(productCreate);
  }
}
