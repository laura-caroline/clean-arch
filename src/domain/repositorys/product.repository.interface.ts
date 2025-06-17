import { ProductEntity } from 'src/infra/database/models/typeorm/product.model';
import { Product } from '../entities/product.entity';

export interface ProductRepositoryInterface {
  createProduct(product: Product): Promise<ProductEntity>;
}
