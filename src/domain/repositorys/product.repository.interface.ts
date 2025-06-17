import { ProductEntity } from 'src/infra/database/entities/typeorm/product.entity';
import { Product } from '../entities/product.entity';

export interface ProductRepositoryInterface {
  createProduct(product: Product): Promise<ProductEntity>;
}
